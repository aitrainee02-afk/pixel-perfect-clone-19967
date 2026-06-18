import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function CursorGlow() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{
        background:
          "radial-gradient(360px circle at var(--cx,50%) var(--cy,50%), rgba(150,69,225,0.10), transparent 70%)",
      }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[70] h-[2px] w-full"
    >
      <div className="h-full w-full" style={{ background: "linear-gradient(90deg, var(--purple-bright), var(--pink-vivid))" }} />
    </motion.div>
  );
}

export function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-orb absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full opacity-60" style={{ background: "radial-gradient(circle, rgba(150,69,225,0.25), transparent 70%)", filter: "blur(40px)" }} />
      <div className="animate-orb absolute top-1/3 -left-40 h-[34rem] w-[34rem] rounded-full opacity-50" style={{ background: "radial-gradient(circle, rgba(217,70,200,0.18), transparent 70%)", filter: "blur(50px)", animationDelay: "-6s" }} />
      <div className="animate-orb absolute bottom-0 right-1/4 h-[28rem] w-[28rem] rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(100,50,200,0.20), transparent 70%)", filter: "blur(60px)", animationDelay: "-12s" }} />
    </div>
  );
}

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "capabilities", label: "Capabilities" },
  { id: "gallery", label: "Gallery" },
  { id: "remove-bg", label: "Remove Background" },
  { id: "catalog", label: "Create Catalog" },
  { id: "upscale", label: "Upscale" },
  { id: "features", label: "Features" },
  { id: "cta", label: "CTA" },
];

export function SectionDots() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav aria-label="Section navigation" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} title={s.label} className="group relative flex items-center">
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                background: isActive ? "var(--purple-vivid)" : "rgba(120,100,160,0.5)",
                boxShadow: isActive ? "0 0 14px var(--purple-vivid)" : "none",
              }}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md px-2 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-text-secondary opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "var(--overlay)", border: "1px solid var(--border-subtle)" }}>
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
