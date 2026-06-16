# @alpha-singularity-llc/seasonal-decoration

Mongolian seasonal site decorations for React — corner ribbons, snowfall, and a New Year tree. Dates use **Asia/Ulaanbaatar**. Non-interactive (`pointer-events-none`), respects `prefers-reduced-motion`.

Holidays included:

- **New Year** — snowfall + tree (Dec 20 – Jan 5)
- **Naadam** (Jun 25 – Jul 20)
- **School year** (Aug 25 – Sep 10)
- **Chinggis Khaan Day** (Nov 7 – Nov 20)
- **Republic Day** (Nov 19 – Dec 3)

## Install

```bash
pnpm add @alpha-singularity-llc/seasonal-decoration
```

Peer dependencies: `react` and `react-dom` (18+).

## Usage

### 1. Import styles

**Tailwind CSS v4** (`globals.css`):

```css
@import "tailwindcss";
@import "@alpha-singularity-llc/seasonal-decoration/styles.css";

@source "../node_modules/@alpha-singularity-llc/seasonal-decoration/dist/**/*.js";
```

**Tailwind CSS v3** (`tailwind.config.ts`):

```ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@alpha-singularity-llc/seasonal-decoration/dist/**/*.js',
  ],
};
```

And in your global CSS or layout:

```ts
import '@alpha-singularity-llc/seasonal-decoration/styles.css';
```

### 2. Add to layout

**Next.js App Router** — use a small client wrapper (recommended):

```tsx
// components/seasonal-decoration.tsx
'use client';

import { SeasonalDecoration } from '@alpha-singularity-llc/seasonal-decoration';

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

### Local preview (this repo)

Run the built-in Vite preview app — hot-reloads from `src/`:

```bash
pnpm install
pnpm preview
```

Opens `http://localhost:5173` with preset buttons (Naadam, Republic Day, New Year, etc.). Switch seasons via the toolbar or `?date=2026-11-26` in the URL. Use `?date=live` for today in Asia/Ulaanbaatar.

Optional default in repo root `.env`:

```env
VITE_SEASONAL_DECORATION_PREVIEW_DATE=2026-07-11
```

## Releasing

1. Bump `version` in `package.json` in your PR.
2. Merge to `main` (or push a tag — workflow runs on relevant path changes).
3. GitHub Actions publishes via npm **Trusted Publishing**.

**First release only:** publish once from your machine — Trusted Publishing cannot create a brand-new package on npm:

```bash
pnpm build
npm publish --access public
```

Then link Trusted Publishing on the package settings page (`asg-llc-team/seasonal-decoration`, workflow `publish.yml`).

Ensure npm Trusted Publishing matches: repo `asg-llc-team/seasonal-decoration`, workflow `publish.yml`, environment **`production`** (must match the workflow job `environment`).

## License

MIT © Alpha Singularity LLC
