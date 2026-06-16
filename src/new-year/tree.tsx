import { getNewYearMood, getNewYearSubtitle, getNewYearTitle } from './season';

const LIGHTS = [
  { cx: 62, cy: 54, color: '#FBBF24', delay: '0s' },
  { cx: 98, cy: 62, color: '#F87171', delay: '0.5s' },
  { cx: 74, cy: 78, color: '#60A5FA', delay: '1s' },
  { cx: 104, cy: 88, color: '#FBBF24', delay: '1.5s' },
  { cx: 56, cy: 92, color: '#F472B6', delay: '0.8s' },
  { cx: 84, cy: 108, color: '#60A5FA', delay: '1.2s' },
  { cx: 48, cy: 118, color: '#FBBF24', delay: '0.3s' },
  { cx: 112, cy: 124, color: '#F87171', delay: '1.7s' },
] as const;

export function NewYearTree() {
  const mood = getNewYearMood();
  const title = getNewYearTitle(mood);
  const subtitle = getNewYearSubtitle(mood);
  const isGreeting = mood.mood === 'greeting';

  return (
    <div
      className='pointer-events-none fixed bottom-4 right-4 z-30 motion-reduce:[&_*]:!animate-none'
      aria-hidden
    >
      <div className='flex flex-col items-center animate-sd-float'>
        <svg
          viewBox='0 0 160 188'
          xmlns='http://www.w3.org/2000/svg'
          className='h-[11.5rem] w-[9.5rem] drop-shadow-[0_12px_28px_rgba(15,23,42,0.22)]'
        >
          <defs>
            <linearGradient id='pine-top' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#3D9970' />
              <stop offset='100%' stopColor='#1F6B4F' />
            </linearGradient>
            <linearGradient id='pine-mid' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#2F8558' />
              <stop offset='100%' stopColor='#14532D' />
            </linearGradient>
            <linearGradient id='pine-low' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#276749' />
              <stop offset='100%' stopColor='#0F3D2E' />
            </linearGradient>
            <linearGradient id='trunk' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6B4423' />
              <stop offset='50%' stopColor='#8B5E34' />
              <stop offset='100%' stopColor='#5C3D1E' />
            </linearGradient>
            <linearGradient id='pot' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#B45309' />
              <stop offset='100%' stopColor='#78350F' />
            </linearGradient>
            <radialGradient id='star-glow' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#FEF9C3' />
              <stop offset='55%' stopColor='#FACC15' />
              <stop offset='100%' stopColor='#CA8A04' />
            </radialGradient>
            <filter id='star-blur' x='-80%' y='-80%' width='260%' height='260%'>
              <feGaussianBlur stdDeviation='2.5' result='blur' />
              <feMerge>
                <feMergeNode in='blur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
            <filter
              id='light-glow'
              x='-100%'
              y='-100%'
              width='300%'
              height='300%'
            >
              <feGaussianBlur stdDeviation='1.8' result='blur' />
              <feMerge>
                <feMergeNode in='blur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>

          <ellipse
            cx='80'
            cy='178'
            rx='34'
            ry='6'
            fill='#0F172A'
            opacity='0.12'
          />

          <path
            fill='url(#pine-low)'
            d='M80 78 C108 78 128 96 134 112 C138 122 128 132 116 136 C124 142 120 152 80 156 C40 152 36 142 44 136 C32 132 22 122 26 112 C32 96 52 78 80 78 Z'
          />
          <path
            fill='url(#pine-mid)'
            d='M80 52 C102 52 118 66 124 80 C128 88 120 96 110 98 C116 104 112 112 80 116 C48 112 44 104 50 98 C40 96 32 88 36 80 C42 66 58 52 80 52 Z'
          />
          <path
            fill='url(#pine-top)'
            d='M80 30 C94 30 106 40 110 52 C112 58 106 64 98 66 C102 70 100 76 80 78 C60 76 58 70 62 66 C54 64 48 58 50 52 C54 40 66 30 80 30 Z'
          />

          <path
            fill='none'
            stroke='#86EFAC'
            strokeOpacity='0.35'
            strokeWidth='1.2'
            d='M80 36 C70 48 62 58 58 70 M80 36 C90 48 98 58 102 70 M80 58 C68 72 58 86 54 100 M80 58 C92 72 102 86 106 100'
          />

          <rect
            x='72'
            y='148'
            width='16'
            height='22'
            rx='3'
            fill='url(#trunk)'
          />
          <path
            fill='url(#pot)'
            d='M58 170 H102 C104 170 106 172 105 176 L101 184 C100 186 98 186 96 186 H64 C62 186 60 186 59 184 L55 176 C54 172 56 170 58 170 Z'
          />

          <circle cx='80' cy='20' r='9' fill='#FDE68A' opacity='0.35' />
          <path
            fill='url(#star-glow)'
            filter='url(#star-blur)'
            d='M80 8 L82.6 15.2 H90.4 L84.1 19.6 86.7 26.8 80 22.4 73.3 26.8 75.9 19.6 69.6 15.2 H77.4 L80 8 Z'
          />

          {LIGHTS.map((light, index) => (
            <g key={index} filter='url(#light-glow)'>
              <circle
                cx={light.cx}
                cy={light.cy}
                r='3'
                fill={light.color}
                className='animate-sd-sparkle motion-reduce:animate-none'
                style={{ animationDelay: light.delay }}
              />
            </g>
          ))}

          <circle cx='46' cy='68' r='1.5' fill='white' opacity='0.7' />
          <circle cx='118' cy='74' r='1.2' fill='white' opacity='0.55' />
          <circle cx='64' cy='102' r='1.4' fill='white' opacity='0.6' />
          <circle cx='108' cy='118' r='1.3' fill='white' opacity='0.5' />
        </svg>

        <div className='-mt-1 w-[8.5rem] rounded-xl border border-white/15 bg-slate-900/90 px-2.5 py-2 text-center shadow-[0_8px_24px_rgba(15,23,42,0.35)] backdrop-blur-sm animate-sd-winter-glow'>
          <p className='text-[10px] font-extrabold uppercase tracking-wide text-white'>
            {title}
          </p>
          <p
            className={`mt-0.5 text-[9px] font-semibold leading-tight ${
              isGreeting ? 'text-amber-200' : 'text-slate-200'
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
