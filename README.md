# セキュア・バンク株式会社 コーポレートサイト

日本の中堅中小企業向けサイバーセキュリティ会社「セキュアバンク」のコーポレートWebサイトです。

## 技術スタック

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **React 19**

## ローカル起動方法

### 1. 依存パッケージをインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. ビルド（本番用）

```bash
npm run build
npm run start
```

---

## ロゴ画像について

`public/logo.svg` に仮ロゴが設置されています。
実際のロゴ画像と差し替える場合は、以下のいずれかの方法で行ってください。

- **SVGの場合**: `public/logo.svg` を上書き
- **PNG/WebPの場合**: `public/logo.png`（または任意のファイル名）で配置し、以下のファイルの `src` を変更：
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx`

---

## サイト構成

| パス | 内容 |
|------|------|
| `/` | トップページ（ヒーロー〜クロージングCTA） |
| `/services` | サービス一覧ページ |
| `/company` | 会社概要ページ |
| `/contact` | お問い合わせページ（フォーム） |

---

## 主要ファイル一覧

```
src/
├── app/
│   ├── layout.tsx           # 共通レイアウト（メタデータ・ヘッダー・フッター）
│   ├── globals.css          # グローバルスタイル・ユーティリティクラス
│   ├── page.tsx             # トップページ
│   ├── services/page.tsx    # サービスページ
│   ├── company/page.tsx     # 会社概要ページ
│   └── contact/page.tsx     # お問い合わせページ
└── components/
    ├── Header.tsx           # 共通ヘッダー（ナビ・CTA）
    ├── Footer.tsx           # 共通フッター
    └── sections/            # トップページ用セクション
        ├── Hero.tsx         # ヒーローセクション
        ├── TrustBand.tsx    # 信頼性帯セクション
        ├── ProblemAI.tsx    # 問題提起（AI攻撃）
        ├── SMBReality.tsx   # 中堅中小の現実
        ├── LegacyLimit.tsx  # 従来型の限界
        ├── Solution.tsx     # 解決策
        ├── Strength.tsx     # 強み
        ├── AIAdvantage.tsx  # AIの優位性
        ├── Steps.tsx        # 導入ステップ
        └── ClosingCTA.tsx   # クロージングCTA
```

---

## デザインシステム

- **カラー**: ネイビー〜ブルー系ダークトーン（`#050d1a` ベース）
- **アクセント**: `#2563eb`（blue-600）
- **カードUI**: `card-base` ユーティリティクラス（`globals.css`）
- **フォント**: Hiragino / Yu Gothic（日本語最適化）
- **レスポンシブ**: モバイルファーストで設計
