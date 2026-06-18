import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(19, 17, 42, 0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a
          href="#hero"
          className="flex items-center gap-2 shrink-0"
          style={{ filter: "drop-shadow(0 0 24px rgba(152,50,226,0.45))" }}
          aria-label="MODAIC home"
        >
          <img src="/modaic_logo_icon.png" alt="MODAIC icon" className="h-8 w-8 object-contain" />
          <Logo size={36} className="sm:h-[44px] md:h-[52px] h-9 w-auto" />
        </a>
        <nav className="hidden gap-8 text-xs font-medium uppercase tracking-[0.25em] text-text-secondary md:flex">
          <a href="#capabilities" className="transition hover:text-text-primary">Modules</a>
          <a href="#gallery" className="transition hover:text-text-primary">Gallery</a>
          <a href="#upscale" className="transition hover:text-text-primary">Upscale</a>
          <a href="#cta" className="transition hover:text-text-primary">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full px-5 py-2 text-sm font-medium text-text-secondary transition hover:text-text-primary sm:block" style={{ border: "1px solid var(--border-medium)" }}>
            Log in
          </button>
          <button className="glow-button glow-button-hover text-sm">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
