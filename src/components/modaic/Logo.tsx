export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MODAIC">
      <defs>
        <linearGradient id="modaicGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#9645e1" />
          <stop offset="100%" stopColor="#d946c8" />
        </linearGradient>
      </defs>
      <path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="url(#modaicGrad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 10 L30 20 L20 30 L10 20 Z" stroke="url(#modaicGrad)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}
