# @asg/seasonal-decoration

Mongolian seasonal site decorations for React — corner ribbons, snowfall, and a New Year tree. Dates use **Asia/Ulaanbaatar**. Non-interactive (`pointer-events-none`), respects `prefers-reduced-motion`.

Holidays included:

- **New Year** — snowfall + tree (Dec 20 – Jan 5)
- **Naadam** (Jun 25 – Jul 20)
- **School year** (Aug 25 – Sep 10)
- **Chinggis Khaan Day** (Nov 7 – Nov 20)
- **Republic Day** (Nov 19 – Dec 3)

## Install

```bash
pnpm add @asg/seasonal-decoration
```

Peer dependencies: `react` and `react-dom` (18+).

## Usage

### 1. Import styles

**Tailwind CSS v4** (`globals.css`):

```css
@import "tailwindcss";
@import "@asg/seasonal-decoration/styles.css";

@source "../node_modules/@asg/seasonal-decoration/dist/**/*.js";
```

**Tailwind CSS v3** (`tailwind.config.ts`):

```ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@asg/seasonal-decoration/dist/**/*.js',
  ],
};
```

And in your global CSS or layout:

```ts
import '@asg/seasonal-decoration/styles.css';
```

### 2. Add to layout

**Next.js App Router** — use a small client wrapper (recommended):

```tsx
// components/seasonal-decoration.tsx
'use client';

import { SeasonalDecoration } from '@asg/seasonal-decoration';

export function SiteSeasonalDecoration() {
  return <SeasonalDecoration />;
}
```

```tsx
// app/layout.tsx
import { SiteSeasonalDecoration } from '@/components/seasonal-decoration';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SiteSeasonalDecoration />
        {children}
      </body>
    </html>
  );
}
```

### Preview a specific date (dev / QA)

Set in `.env.local` (do not use in production unless intentional):

```env
NEXT_PUBLIC_SEASONAL_DECORATION_PREVIEW_DATE=2026-11-14
```

Format: `YYYY-MM-DD` in Ulaanbaatar calendar.

## Publish to npm (first time)

### 1. Create accounts

1. Sign up at [npmjs.com](https://www.npmjs.com/signup)
2. Create the **`@asg` organization** at [npmjs.com/org/create](https://www.npmjs.com/org/create) (free for public packages)
   - If `@asg` is taken, pick another scope (e.g. `@alphasingularity`) and update `name` in `package.json`

### 2. Log in locally

```bash
npm login
# enter username, password, email, OTP if enabled
npm whoami   # verify
```

### 3. Push GitHub repo

```bash
git init
git add .
git commit -m "Initial release: Mongolian seasonal decorations for React"
# create github.com/asg-llc-team/seasonal-decoration (empty, no README)
git remote add origin git@github.com:asg-llc-team/seasonal-decoration.git
git push -u origin main
```

Update `repository`, `homepage`, and `bugs` URLs in `package.json` to match your repo.

### 4. Build and publish

```bash
pnpm install
pnpm build
npm publish --access public
```

Scoped packages default to private; `--access public` is required the first time.

### 5. Later releases

```bash
# patch: 0.1.0 → 0.1.1
npm version patch
pnpm build
npm publish --access public
git push && git push --tags
```

## License

MIT © Alpha Singularity LLC
