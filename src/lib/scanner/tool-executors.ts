const SCAN_TIMEOUT_MS = 8000;

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname;
    const blocklist = [/^localhost$/i, /^127\./, /^10\./, /^192\.168\./, /^172\.(1[6-9]|2\d|3[01])\./, /^::1$/, /^0\.0\.0\.0$/, /^169\.254\./];
    return !blocklist.some((p) => p.test(hostname));
  } catch { return false; }
}

async function safeFetch(url: string, options: RequestInit = {}): Promise<Response> {
  if (!isSafeUrl(url)) throw new Error(`セキュリティ上の理由によりブロック: ${url}`);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SCAN_TIMEOUT_MS);
  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: { "User-Agent": "SecureBank-SecurityScanner/1.0 (https://securebank.co.jp/security-policy)", ...options.headers },
    });
  } finally { clearTimeout(timeout); }
}

export async function executeFetchHeaders(input: { url: string; method?: string }): Promise<string> {
  try {
    const res = await safeFetch(input.url, { method: (input.method as "GET" | "HEAD") || "HEAD", redirect: "follow" });
    const headers: Record<string, string> = {};
    res.headers.forEach((value, key) => { headers[key] = value; });
    const securityHeaders = ["strict-transport-security","content-security-policy","x-frame-options","x-content-type-options","referrer-policy","permissions-policy"];
    return JSON.stringify({
      url: input.url, status: res.status, finalUrl: res.url, allHeaders: headers,
      securityHeadersPresent: securityHeaders.filter((h) => headers[h]),
      securityHeadersMissing: securityHeaders.filter((h) => !headers[h]),
    }, null, 2);
  } catch (err) { return JSON.stringify({ error: String(err), url: input.url }); }
}

export async function executeFetchPage(input: { url: string }): Promise<string> {
  try {
    const res = await safeFetch(input.url, { method: "GET" });
    const text = await res.text();
    return JSON.stringify({
      url: input.url, status: res.status,
      contentType: res.headers.get("content-type"),
      preview: text.slice(0, 5000),
      hasLoginForm: /type=["']password["']/i.test(text),
      hasAdminKeywords: /admin|dashboard|管理/i.test(text),
      scriptSources: [...text.matchAll(/src=["']([^"']+\.js[^"']*)/gi)].map((m) => m[1]).slice(0, 10),
    });
  } catch (err) { return JSON.stringify({ error: String(err), url: input.url }); }
}

export async function executeCheckPathExposure(input: { baseUrl: string; paths: string[] }): Promise<string> {
  const results = await Promise.allSettled(
    input.paths.slice(0, 15).map(async (path) => {
      const url = `${input.baseUrl.replace(/\/$/, "")}${path}`;
      try {
        const res = await safeFetch(url, { method: "HEAD" });
        return { path, url, status: res.status, exposed: res.status !== 404 && res.status !== 410, requiresAuth: res.status === 401 || res.status === 403 };
      } catch { return { path, url, status: 0, exposed: false, requiresAuth: false }; }
    })
  );
  return JSON.stringify({ baseUrl: input.baseUrl, paths: results.map((r) => r.status === "fulfilled" ? r.value : { error: "failed" }) });
}

export async function executeCheckRateLimit(input: { url: string; attempts: number }): Promise<string> {
  const count = Math.min(input.attempts, 10);
  const results = [];
  for (let i = 0; i < count; i++) {
    try {
      const res = await safeFetch(input.url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: `wrong_${i}` }) });
      results.push({ attempt: i + 1, status: res.status });
      if (res.status === 429) return JSON.stringify({ url: input.url, rateLimitDetected: true, blockedAtAttempt: i + 1, results });
    } catch { results.push({ attempt: i + 1, status: 0 }); break; }
    await new Promise((r) => setTimeout(r, 200));
  }
  return JSON.stringify({ url: input.url, rateLimitDetected: false, totalAttempts: results.length, results });
}

export async function executeCheckDnsRecords(input: { domain: string; recordType: string }): Promise<string> {
  try {
    const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(input.domain)}&type=${input.recordType}`, { headers: { Accept: "application/json" } });
    const data = await res.json();
    const records = (data.Answer || []).map((r: { data: string }) => r.data);
    return JSON.stringify({ domain: input.domain, recordType: input.recordType, records });
  } catch (err) { return JSON.stringify({ error: String(err), domain: input.domain }); }
}
