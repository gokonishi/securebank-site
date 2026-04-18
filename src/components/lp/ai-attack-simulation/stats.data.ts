export type StatSource = {
  name: string;
  url: string;
  asOf: string;
};

export type StatItem = {
  number: string;
  label: string;
  source: StatSource;
};

export const stats: StatItem[] = [
  {
    number: "約2/3",
    label: "国内ランサムウェア被害のうち中小企業が占める割合",
    source: {
      name: "警察庁 令和7年上半期サイバー空間をめぐる脅威の情勢等",
      url: "https://www.npa.go.jp/publications/statistics/cybersecurity/data/R7kami/R07_kami_cyber_jyosei.pdf",
      asOf: "2025-09",
    },
  },
  {
    number: "2,386万円",
    label: "ランサムウェア被害1件あたりの平均被害額",
    source: {
      name: "JNSA インシデント損害額調査レポート",
      url: "https://www.jnsa.org/result/incidentdamage/2023.html",
      asOf: "2023-11",
    },
  },
  {
    number: "約4割増",
    label: "中小企業のランサムウェア被害件数（前年同期比）",
    source: {
      name: "警察庁 令和7年上半期サイバー空間をめぐる脅威の情勢等",
      url: "https://www.npa.go.jp/publications/statistics/cybersecurity/data/R7kami/R07_kami_cyber_jyosei.pdf",
      asOf: "2025-09",
    },
  },
];
