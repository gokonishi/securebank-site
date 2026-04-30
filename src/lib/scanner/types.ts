export type Severity = "critical" | "high" | "medium" | "low" | "info" | "good";

export interface Finding {
  id: string;
  category: string;
  title: string;
  severity: Severity;
  description: string;
  recommendation: string;
  evidence?: string;
}

export interface ScanProgress {
  step: string;
  detail: string;
  completed: boolean;
}

export interface ScanResult {
  domain: string;
  scannedAt: string;
  techStack: string[];
  findings: Finding[];
  score: number;
  summary: string;
  progress: ScanProgress[];
}

export interface ScanRequest {
  domain: string;
  email: string;
}
