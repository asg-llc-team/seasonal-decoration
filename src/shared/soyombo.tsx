/** Simplified soyombo — Mongol national emblem. */
export function Soyombo({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 36'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden
    >
      <g fill='currentColor'>
        <circle cx='12' cy='4.5' r='2.2' />
        <path d='M9.5 8.5c0-1.2 1.1-2 2.5-2s2.5.8 2.5 2v1.5H9.5V8.5Z' />
        <rect x='11.1' y='10' width='1.8' height='10' rx='0.4' />
        <rect x='7.5' y='13' width='9' height='1.6' rx='0.4' />
        <path d='M8.5 24.5 12 21l3.5 3.5v2H8.5v-2Z' />
        <rect x='10.5' y='26.5' width='3' height='5' rx='0.4' />
        <path d='M6 31.5h12v2.5H6z' />
      </g>
    </svg>
  );
}
