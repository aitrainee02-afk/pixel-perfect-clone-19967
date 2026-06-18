type LogoProps = {
  className?: string;
  /** Height in px for the mark + wordmark lockup */
  size?: number;
};

/**
 * MODAIC logo lockup — white symbol + "MODAIC" wordmark.
 * Pure inline SVG so it stays crisp at any size and inherits currentColor.
 */
export function Logo({ className = "", size = 36 }: LogoProps) {
  const h = size;
  return (
    <svg
      viewBox="0 0 260 64"
      height={h}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MODAIC"
      role="img"
    >
      {/* Symbol: 4 petal arcs around a diamond — rendered in pure white */}
      <g transform="translate(2 2)" fill="#ffffff">
        {/* Outer petals (top, right, bottom, left) */}
        <path d="M30 0a18 18 0 0 1 18 18h-8a10 10 0 0 0-10-10V0z" />
        <path d="M60 30a18 18 0 0 1-18 18v-8a10 10 0 0 0 10-10h8z" />
        <path d="M30 60a18 18 0 0 1-18-18h8a10 10 0 0 0 10 10v8z" />
        <path d="M0 30a18 18 0 0 1 18-18v8a10 10 0 0 0-10 10H0z" />
        {/* Center diamond outline */}
        <path
          d="M30 14l16 16-16 16L14 30 30 14zm0 8l-8 8 8 8 8-8-8-8z"
          fillRule="evenodd"
        />
      </g>
      {/* Wordmark */}
      <text
        x="78"
        y="44"
        fill="#ffffff"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontWeight={800}
        fontSize="34"
        letterSpacing="2"
      >
        MODAIC
      </text>
    </svg>
  );
}
