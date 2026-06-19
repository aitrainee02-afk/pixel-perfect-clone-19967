import logoIcon from "@/assets/modaic/modaic_logo_icon_v3.png.asset.json";

type LogoProps = {
  className?: string;
  /** Height in px for the mark + wordmark lockup */
  size?: number;
};

/**
 * MODAIC logo lockup — uploaded white square icon + "MODAIC" wordmark.
 */
export function Logo({ className = "", size = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height: size }}>
      <img
        src={logoIcon.url}
        alt="MODAIC"
        style={{ height: size, width: size, objectFit: "contain", borderRadius: 8 }}
        draggable={false}
      />
      <span
        style={{
          color: "#ffffff",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 800,
          fontSize: size * 0.55,
          letterSpacing: "0.12em",
          lineHeight: 1,
        }}
      >
        MODAIC
      </span>
    </div>
  );
}
