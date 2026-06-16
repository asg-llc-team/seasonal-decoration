import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const previewDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(previewDir, '..'), '');

  return {
    root: previewDir,
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      open: true,
    },
    define: {
      'import.meta.env.VITE_SEASONAL_DECORATION_PREVIEW_DATE': JSON.stringify(
        env.VITE_SEASONAL_DECORATION_PREVIEW_DATE ?? '',
      ),
    },
  };
});
