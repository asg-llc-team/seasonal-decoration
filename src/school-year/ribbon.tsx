import {
  getSchoolYearMood,
  getSchoolYearSubtitle,
  getSchoolYearTitle,
} from './season';

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
    >
      <path d='M12 7v14' />
      <path d='M5.5 5.5A3.5 3.5 0 0 1 9 5h8a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H9a3.5 3.5 0 0 0-3.5 3.5V5.5Z' />
      <path d='M5.5 19.5A3.5 3.5 0 0 1 9 18h9.5' />
    </svg>
  );
}

const sparkles = [
  { bottom: '5.5rem', right: '1.25rem', delay: '0s' },
  { bottom: '7.5rem', right: '3.5rem', delay: '0.6s' },
  { bottom: '4rem', right: '4.75rem', delay: '1.1s' },
] as const;

export function SchoolYearRibbon() {
  const mood = getSchoolYearMood();
  const title = getSchoolYearTitle();
  const subtitle = getSchoolYearSubtitle(mood);
  const isGreeting = mood.mood === 'greeting';

  return (
    <div
      className='pointer-events-none fixed bottom-0 right-0 z-30 h-48 w-48 motion-reduce:[&_*]:!animate-none'
      aria-hidden
    >
      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className='absolute h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_6px_#FDE68A] animate-sd-sparkle'
          style={{
            bottom: sparkle.bottom,
            right: sparkle.right,
            animationDelay: sparkle.delay,
          }}
        />
      ))}

      <div
        className='absolute bottom-10 right-[-3.25rem] w-64 origin-center'
        style={{ transform: 'rotate(-45deg)' }}
      >
        <div className='animate-sd-float'>
          <div className='relative animate-sd-glow border-y-2 border-amber-200 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 px-3 py-2.5 shadow-xl [clip-path:polygon(0.65rem_0,calc(100%-0.65rem)_0,100%_100%,0_100%)]'>
            <div className='pointer-events-none absolute inset-0 overflow-hidden [clip-path:polygon(0.65rem_0,calc(100%-0.65rem)_0,100%_100%,0_100%)]'>
              <div className='absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-sd-shimmer' />
            </div>

            <div className='relative flex flex-col items-center gap-0.5 text-center text-white'>
              <div className='flex items-center gap-2'>
                <BookIcon className='h-4 w-4 shrink-0 text-amber-100 animate-sd-flag-wave' />
                <span className='text-xs font-extrabold uppercase tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'>
                  {title}
                </span>
              </div>
              <span
                className={`text-[11px] font-bold leading-tight ${
                  isGreeting
                    ? 'text-amber-200 drop-shadow-[0_0_8px_rgba(253,230,138,0.8)]'
                    : 'text-white/95'
                }`}
              >
                {subtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
