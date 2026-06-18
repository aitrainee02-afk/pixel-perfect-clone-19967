import { useRef, useState } from "react";

export function BeforeAfterSlider({ before, after, beforeLabel = "BACKGROUND", afterLabel = "REMOVED" }: { before: string; after: string; beforeLabel?: string; afterLabel?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  };

  // Checkerboard pattern reveals the "no background" side clearly
  const checkerBg = {
    backgroundImage:
      "linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.04) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.04) 75%)",
    backgroundSize: "24px 24px",
    backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0",
    background: "radial-gradient(ellipse at center, rgba(150,69,225,0.18), rgba(13,11,26,0.95) 70%)",
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl cursor-ew-resize"
      style={{ border: "1px solid var(--border-medium)", boxShadow: "var(--card-glow)", ...checkerBg }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onDoubleClick={() => setPos(50)}
    >
      {/* AFTER (no background) shown on the dark backdrop */}
      <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-contain p-8" />
      {/* BEFORE (with background) clipped by slider position */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={beforeLabel} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-primary" style={{ background: "rgba(13,11,26,0.7)", backdropFilter: "blur(8px)" }}>
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-primary" style={{ background: "rgba(150,69,225,0.5)", backdropFilter: "blur(8px)" }}>
        {afterLabel}
      </span>
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, width: 2, background: "linear-gradient(180deg, #9645e1, #d946c8)", boxShadow: "0 0 20px #9645e1" }}>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-text-primary" style={{ background: "var(--surface)", border: "1px solid var(--border-active)", boxShadow: "0 0 24px rgba(150,69,225,0.6)" }}>
          <span className="text-xs">◀▶</span>
        </div>
      </div>
    </div>
  );
}
