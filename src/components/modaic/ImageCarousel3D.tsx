import { useEffect, useState, useRef } from "react";


type Props = { images?: string[] };

const fallback = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/320/440?random=${i + 1}`);

export default function ImageCarousel3D({ images }: Props) {
  const items = (images && images.length ? images : fallback).slice(0, 12);
  const count = items.length;
  const angleStep = 360 / count;
  const radius = 540;

  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<number | null>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);


  // Auto-rotate when not hovered (full revolution ~18s)
  useEffect(() => {
    if (hover) return;
    autoRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, 18000 / count);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [hover, count]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + count) % count);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  const ringRotation = -active * angleStep;

  const depthStyle = (i: number) => {
    const diff = Math.abs(i - active);
    const circular = Math.min(diff, count - diff);
    const opacity = circular === 0 ? 1 : circular <= 2 ? 0.75 : 0.4;
    const scale = circular === 0 ? 1.05 : circular <= 2 ? 0.95 : 0.85;
    const zIndex = count - circular;
    return { opacity, scale, zIndex, isActive: circular === 0 };
  };

  return (
    <div className="flex flex-col items-center">
      <div
        ref={stageRef}
        className="relative flex w-full items-center justify-center"
        style={{ height: 560, perspective: 1200 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="relative"
          style={{
            width: 280,
            height: 380,
            transformStyle: "preserve-3d",
            transform: `rotateY(${ringRotation}deg)`,
            transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {items.map((src, i) => {
            const { opacity, scale, zIndex, isActive } = depthStyle(i);
            const shutterDelay = i * 70;
            return (
              <div
                key={src + i}
                onClick={() => setActive(i)}
                className="absolute left-0 top-0 cursor-pointer overflow-hidden rounded-2xl"
                style={{
                  width: 280,
                  height: 380,
                  background: "#111",
                  transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  border: isActive ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(150,69,225,0.18)",
                  boxShadow: isActive ? "0 0 50px rgba(150,69,225,0.45)" : "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "opacity 500ms, box-shadow 500ms, border-color 500ms",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="block h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                  style={{
                    filter: revealed ? "brightness(1) saturate(1)" : "brightness(0.6) saturate(0.4)",
                    transition: "filter 800ms ease-out",
                    transitionDelay: `${shutterDelay}ms`,
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#7c3aed",
                    transform: revealed ? "scaleY(0)" : "scaleY(1)",
                    transformOrigin: "top",
                    transition: "transform 650ms cubic-bezier(0.76, 0, 0.24, 1)",
                    transitionDelay: `${shutterDelay}ms`,
                    zIndex: 2,
                    willChange: "transform",
                    pointerEvents: "none",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          aria-label="Previous"
          onClick={() => setActive((a) => (a - 1 + count) % count)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-lg text-text-primary transition hover:bg-white/10"
          style={{ border: "1px solid rgba(150,69,225,0.45)" }}
        >
          ‹
        </button>
        <span className="text-caption uppercase tracking-[0.3em]">
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <button
          aria-label="Next"
          onClick={() => setActive((a) => (a + 1) % count)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-lg text-text-primary transition hover:bg-white/10"
          style={{ border: "1px solid rgba(150,69,225,0.45)" }}
        >
          ›
        </button>
      </div>
    </div>

  );
}
