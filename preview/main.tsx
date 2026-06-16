import './globals.css';

const params = new URLSearchParams(window.location.search);
const queryDate = params.get('date');
const envDate = import.meta.env.VITE_SEASONAL_DECORATION_PREVIEW_DATE as
  | string
  | undefined;

const useLiveCalendar = queryDate === 'live';
const previewDate = useLiveCalendar
  ? undefined
  : (queryDate ?? (envDate || '2026-07-11'));

(
  globalThis as unknown as { process: { env: Record<string, string> } }
).process = {
  env: previewDate
    ? { NEXT_PUBLIC_SEASONAL_DECORATION_PREVIEW_DATE: previewDate }
    : {},
};

const { createRoot } = await import('react-dom/client');
const { App } = await import('./App');

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root');

createRoot(root).render(<App activeDate={useLiveCalendar ? 'live' : previewDate} />);
