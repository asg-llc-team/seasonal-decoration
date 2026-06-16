import { SeasonalDecoration } from '../src/seasonal-decoration';

const PRESETS = [
  { label: 'Наадам', date: '2026-07-11' },
  { label: 'Шинэ хичээлийн жил', date: '2026-09-01' },
  { label: 'Чингис хааны өдөр', date: '2026-11-14' },
  { label: 'Бүгд Найрамдах өдөр', date: '2026-11-26' },
  { label: 'Шинэ он', date: '2026-12-25' },
  { label: 'Бодит өдөр', date: 'live' },
] as const;

type AppProps = {
  activeDate: string | undefined;
};

export function App({ activeDate }: AppProps) {
  return (
    <>
      <header className='pointer-events-auto fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/95 px-4 py-3 backdrop-blur'>
        <p className='mb-2 text-xs font-medium uppercase tracking-wide text-slate-400'>
          Улирлын чимэглэл — урьдчилан харах
        </p>
        <div className='flex flex-wrap gap-2'>
          {PRESETS.map((preset) => {
            const isActive =
              preset.date === 'live'
                ? activeDate === 'live'
                : activeDate === preset.date;

            return (
              <a
                key={preset.date}
                href={
                  preset.date === 'live' ? '?date=live' : `?date=${preset.date}`
                }
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {preset.label}
              </a>
            );
          })}
        </div>
        <p className='mt-2 text-xs text-slate-500'>
          {activeDate === 'live'
            ? 'Өнөөдрийн огноо (Улаанбаатар), урьдчилсан огноо тохируулаагүй.'
            : `Урьдчилсан огноо: ${activeDate} (УБ хуанли).`}
        </p>
      </header>

      <main className='flex min-h-dvh items-center justify-center px-4 pt-28 pb-12'>
        <div className='max-w-lg rounded-xl border border-white/10 bg-slate-800/50 p-8 text-center'>
          <h1 className='text-2xl font-bold text-white'>Жишээ хуудас</h1>
          <p className='mt-2 text-slate-400'>
            Чимэглэлүүд буланд харагдана — бодит сайттай ижил.
          </p>
        </div>
      </main>

      <SeasonalDecoration />
    </>
  );
}
