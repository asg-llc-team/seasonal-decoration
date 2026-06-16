/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SEASONAL_DECORATION_PREVIEW_DATE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
