import Anthropic from "@anthropic-ai/sdk";

export const scannerTools: Anthropic.Tool[] = [
  {
    name: "fetch_headers",
    description: "指定URLにHTTPリクエストを送り、レスポンスヘッダーとステータスコードを取得する。セキュリティヘッダーの有無を確認するために使用する。",
    input_schema: {
      type: "object" as const,
      properties: {
        url: { type: "string", description: "診断対象のURL" },
        method: { type: "string", enum: ["GET", "HEAD"] },
      },
      required: ["url"],
    },
  },
  {
    name: "fetch_page",
    description: "指定URLのHTMLコンテンツを取得する。フォーム、スクリプト参照、メタタグなどを確認するために使用する。",
    input_schema: {
      type: "object" as const,
      properties: {
        url: { type: "string", description: "取得するURL" },
      },
      required: ["url"],
    },
  },
  {
    name: "check_path_exposure",
    description: "管理画面や機密パスが公開されていないか確認する。",
    input_schema: {
      type: "object" as const,
      properties: {
        baseUrl: { type: "string" },
        paths: { type: "array", items: { type: "string" } },
      },
      required: ["baseUrl", "paths"],
    },
  },
  {
    name: "check_dns_records",
    description: "DNSレコードを確認する。SPF/DMARC等のメール認証設定を診断する。",
    input_schema: {
      type: "object" as const,
      properties: {
        domain: { type: "string" },
        recordType: { type: "string", enum: ["TXT", "MX", "NS", "A", "CNAME"] },
      },
      required: ["domain", "recordType"],
    },
  },
  {
    name: "check_subdomains",
    description: "よく使われるサブドメインが公開されていないか確認する。dev, staging, test, admin, api, mail等のサブドメインを確認する。",
    input_schema: {
      type: "object" as const,
      properties: {
        domain: { type: "string", description: "ベースドメイン（例: example.com）" },
        subdomains: { type: "array", items: { type: "string" }, description: "確認するサブドメインのリスト" },
      },
      required: ["domain", "subdomains"],
    },
  },
  {
    name: "check_cookie_security",
    description: "Webサイトのクッキーのセキュリティ属性（Secure, HttpOnly, SameSite）を確認する。",
    input_schema: {
      type: "object" as const,
      properties: {
        url: { type: "string", description: "確認するURL" },
      },
      required: ["url"],
    },
  },
  {
    name: "report_finding",
    description: "診断で発見した脆弱性や設定ミスを報告する。診断完了後に必ず呼び出す。",
    input_schema: {
      type: "object" as const,
      properties: {
        findings: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              category: { type: "string" },
              title: { type: "string" },
              severity: { type: "string", enum: ["critical", "high", "medium", "low", "info", "good"] },
              description: { type: "string" },
              recommendation: { type: "string" },
              evidence: { type: "string" },
            },
            required: ["id", "category", "title", "severity", "description", "recommendation"],
          },
        },
        techStack: { type: "array", items: { type: "string" } },
        summary: { type: "string" },
        score: { type: "number" },
      },
      required: ["findings", "techStack", "summary", "score"],
    },
  },
];