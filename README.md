# Next.js ダッシュボード UI

このアプリは、「Admin Dashboard From Scratch - Next.js, TypeScript, Shadcn/ui」をベースに作成した Next.js App Router + Tailwind CSS の学習用ダッシュボード UI です。

---

## デプロイURL

https://nextjs-dashboard-ten-kohl-58.vercel.app/

---

## 使用技術

- React/Next.js
- Shadcn/ui
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React
- React Hook Form & Zod
---
![ダッシュボード](https://github.com/t-kitamoto/nextjs-dashboard/blob/main/public/sample.png)
---

## カスタマイズ内容

| 項目 | 内容 |
|------|------|
| UI一部日本語化 | ボタンやフォームラベルなど一部を日本語に変更し、ローカライズ対応の実装練習として調整 |
| toast対応 | `@/components/ui/toaster` が非推奨だったため、`sonner` に置き換え |
| Hydration対策 | `useMounted` カスタムフックを導入

---

## 元教材

@TraversyMedia　Admin Dashboard From Scratch - Next.js, TypeScript, Shadcn/ui　https://www.youtube.com/watch?v=hhudoSMM0yU&t=8041s&ab_channel=TraversyMedia
