import { Soyombo } from '../shared/soyombo';
import {
  getChinggisDayMood,
  getChinggisDaySubtitle,
  getChinggisDayTitle,
} from './season';

const sparkles = [
  { bottom: '5.5rem', right: '1.25rem', delay: '0s' },
  { bottom: '7.5rem', right: '3.5rem', delay: '0.6s' },
  { bottom: '4rem', right: '4.75rem', delay: '1.1s' },
] as const;

export function ChinggisDayRibbon() {
  const mood = getChinggisDayMood();
  const title = getChinggisDayTitle();
  const subtitle = getChinggisDaySubtitle(mood);
  const isGreeting = mood.mood === 'greeting';

  return (
    <div
      className='pointer-events-none fixed bottom-0 right-0 z-30 h-48 w-48 motion-reduce:[&_*]:!animate-none'
      aria-hidden
    >
      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className='absolute h-1.5 w-1.5 rounded-full bg-[#FFD200] shadow-[0_0_6px_#FFD200] animate-sd-sparkle'
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
          <div className='relative animate-sd-glow border-y-2 border-[#FFD200] bg-gradient-to-r from-[#2B0A0A] via-[#5C1A1A] to-[#2B0A0A] px-3 py-2.5 shadow-xl [clip-path:polygon(0.65rem_0,calc(100%-0.65rem)_0,100%_100%,0_100%)]'>
            <div className='pointer-events-none absolute inset-0 overflow-hidden [clip-path:polygon(0.65rem_0,calc(100%-0.65rem)_0,100%_100%,0_100%)]'>
              <div className='absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent animate-sd-shimmer' />
            </div>

            <div className='relative flex flex-col items-center gap-0.5 text-center text-white'>
              <div className='flex items-center gap-2'>
                <Soyombo className='h-5 w-3.5 shrink-0 text-[#FFD200] drop-shadow-[0_0_6px_rgba(255,210,0,0.6)] animate-sd-flag-wave' />
                <span className='max-w-[11rem] text-[10px] font-extrabold uppercase leading-tight tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'>
                  {title}
                </span>
              </div>
              <span
                className={`text-[11px] font-bold leading-tight ${
                  isGreeting
                    ? 'text-[#FFD200] drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]'
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
