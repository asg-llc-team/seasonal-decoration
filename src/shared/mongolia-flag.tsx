export function MongoliaFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 30 20'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden
    >
      <rect width='7' height='20' fill='#C4272F' />
      <rect x='7' width='16' height='20' fill='#0066B3' />
      <rect x='23' width='7' height='20' fill='#C4272F' />
      <g fill='#FFD200'>
        <circle cx='3.5' cy='4' r='1.1' />
        <rect x='2.9' y='6' width='1.2' height='7' rx='0.2' />
        <rect x='1.5' y='7.5' width='4' height='1' rx='0.2' />
        <rect x='2.2' y='14.5' width='2.6' height='1' rx='0.2' />
        <rect x='2.9' y='15.5' width='1.2' height='2.5' rx='0.2' />
      </g>
    </svg>
  );
}
