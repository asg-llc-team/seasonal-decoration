/** Fixed flake layout so SSR and client match (no hydration flicker). */
const FLAKES = [
  { left: '4%', size: 14, duration: 14, delay: 0, drift: 12, opacity: 0.55 },
  { left: '11%', size: 18, duration: 18, delay: 2, drift: -8, opacity: 0.7 },
  { left: '18%', size: 12, duration: 12, delay: 4, drift: 16, opacity: 0.5 },
  { left: '25%', size: 16, duration: 16, delay: 1, drift: -14, opacity: 0.65 },
  { left: '32%', size: 13, duration: 20, delay: 6, drift: 10, opacity: 0.55 },
  { left: '39%', size: 20, duration: 15, delay: 3, drift: -18, opacity: 0.75 },
  { left: '46%', size: 12, duration: 13, delay: 8, drift: 14, opacity: 0.5 },
  { left: '53%', size: 16, duration: 17, delay: 0.5, drift: -10, opacity: 0.6 },
  { left: '60%', size: 14, duration: 19, delay: 5, drift: 20, opacity: 0.55 },
  { left: '67%', size: 18, duration: 14, delay: 7, drift: -16, opacity: 0.7 },
  { left: '74%', size: 12, duration: 11, delay: 2.5, drift: 8, opacity: 0.5 },
  { left: '81%', size: 16, duration: 16, delay: 9, drift: -12, opacity: 0.65 },
  { left: '88%', size: 14, duration: 18, delay: 4.5, drift: 15, opacity: 0.55 },
  { left: '95%', size: 18, duration: 13, delay: 1.5, drift: -9, opacity: 0.7 },
  { left: '8%', size: 12, duration: 21, delay: 10, drift: 11, opacity: 0.5 },
  { left: '22%', size: 16, duration: 15, delay: 11, drift: -13, opacity: 0.6 },
  { left: '36%', size: 14, duration: 17, delay: 12, drift: 17, opacity: 0.55 },
  { left: '50%', size: 18, duration: 12, delay: 13, drift: -7, opacity: 0.7 },
  { left: '64%', size: 12, duration: 19, delay: 14, drift: 9, opacity: 0.5 },
  { left: '78%', size: 16, duration: 14, delay: 15, drift: -15, opacity: 0.65 },
  { left: '92%', size: 14, duration: 16, delay: 16, drift: 13, opacity: 0.55 },
  { left: '15%', size: 16, duration: 22, delay: 3.5, drift: -11, opacity: 0.6 },
  { left: '44%', size: 12, duration: 10, delay: 6.5, drift: 19, opacity: 0.5 },
  {
    left: '58%',
    size: 20,
    duration: 18,
    delay: 8.5,
    drift: -20,
    opacity: 0.75,
  },
  { left: '85%', size: 14, duration: 15, delay: 5.5, drift: 6, opacity: 0.55 },
] as const;

const SNOWFLAKE = '\u2744';

export function Snowfall() {
  return (
    <div
      className='pointer-events-none fixed inset-0 z-20 overflow-hidden motion-reduce:hidden'
      aria-hidden
    >
      {FLAKES.map((flake, index) => (
        <span
          key={index}
          className='absolute top-[-5%] leading-none text-sky-500 animate-sd-snowfall'
          style={{
            left: flake.left,
            fontSize: flake.size,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            ['--snow-drift' as string]: `${flake.drift}px`,
          }}
        >
          {SNOWFLAKE}
        </span>
      ))}
    </div>
  );
}
