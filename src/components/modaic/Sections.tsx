import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, animate, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Upload, Check, Zap, Shield, Layers, Image as ImageIcon, Wand2, Palette, Box, Workflow, BarChart3, Cloud, Globe, Lock, Sliders, Repeat, Eye, Brush, FileCheck, UploadCloud, Loader2 } from "lucide-react";
import { modules, features, heroProducts, galleryImages, productGalleryUnique, heroImagesUnique, stats, testimonials, marketplaces, marqueeTags, removeBgProducts, catalogChannels, catalogUploadImg, upscaleBefore, upscaleAfter, heroStack, upscaleImages, modaicLogo } from "@/lib/modaic-data";
import { BeforeAfterSlider } from "./BeforeAfter";
import ImageCarousel3D from "./ImageCarousel3D";
import CatalogIslandSelector from "./CatalogIslandSelector";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

function SectionShell({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-28 md:py-36 ${className}`}>
      {children}
    </section>
  );
}

/* ---------- HERO (scattered editorial mood board) ---------- */
type Pos = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  w: number;
  h: number;
  rot: number;
  anim: string;
  delay: number;
};

const HERO_POSITIONS: Pos[] = [
  { top: "6%",  left: "6%",   w: 230, h: 300, rot: -8, anim: "floatA", delay: 0.0 },
  { top: "3%",  left: "26%",  w: 190, h: 250, rot: 4,  anim: "floatB", delay: 0.6 },
  { top: "4%",  right: "26%", w: 210, h: 280, rot: -5, anim: "floatC", delay: 1.2 },
  { top: "6%",  right: "6%",  w: 230, h: 300, rot: 7,  anim: "floatD", delay: 1.8 },
  { top: "34%", left: "5%",   w: 210, h: 280, rot: -4, anim: "floatE", delay: 2.4 },
  { top: "38%", left: "24%",  w: 180, h: 230, rot: 6,  anim: "floatF", delay: 3.0 },
  { top: "36%", right: "24%", w: 195, h: 260, rot: -6, anim: "floatA", delay: 0.3 },
  { top: "32%", right: "5%",  w: 225, h: 295, rot: 5,  anim: "floatB", delay: 0.9 },
  { bottom: "5%", left: "6%",  w: 220, h: 290, rot: 7,  anim: "floatC", delay: 1.5 },
  { bottom: "4%", left: "26%", w: 195, h: 255, rot: -5, anim: "floatD", delay: 2.1 },
  { bottom: "5%", right: "25%",w: 205, h: 270, rot: 4,  anim: "floatE", delay: 2.7 },
  { bottom: "7%", right: "6%", w: 225, h: 295, rot: -9, anim: "floatF", delay: 3.3 },
];

export function Hero() {
  const images = heroImagesUnique.slice(0, 12);

  return (
    <section
      id="hero"
      className="hero-scatter relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#19152E" }}
    >
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {images.map((src, i) => {
        const p = HERO_POSITIONS[i];
        if (!p) return null;
        return (
          <div
            key={src + i}
            className="hero-image"
            style={{
              position: "absolute",
              top: p.top,
              bottom: p.bottom,
              left: p.left,
              right: p.right,
              width: p.w,
              height: p.h,
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              opacity: 0,
              zIndex: 1,
              transform: `rotate(${p.rot}deg) translateY(20px)`,
              animation: `heroEnter 600ms ease-out forwards, ${p.anim} ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${0.2 + i * 0.08}s, ${1 + p.delay}s`,
              transition:
                "transform 350ms cubic-bezier(0.34,1.56,0.64,1), opacity 350ms ease, border-color 350ms ease",
              willChange: "transform, opacity",
              ["--rot" as any]: `${p.rot}deg`,
            }}
          >
            <img
              src={src}
              alt=""
              loading={i < 4 ? "eager" : "lazy"}
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        );
      })}

      <div
        className="relative mx-auto flex min-h-screen items-center justify-center px-6"
        style={{ zIndex: 10 }}
      >
        <div className="w-full max-w-[680px] text-center">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-eyebrow mb-6">
            AI Fashion Creative Suite
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-display uppercase">
            <span className="block">Everything your brand needs.</span>
            <span className="block gradient-text">Nothing it does not.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-body mx-auto mt-8 max-w-xl"
          >
            Eight production-grade AI modules for fashion, retail, and commerce.
            Built for brands that move at the speed of culture.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <MagneticButton>
              Start now <ArrowRight size={18} />
            </MagneticButton>
            <button
              className="rounded-full px-8 py-4 text-sm font-medium text-text-secondary transition hover:text-text-primary"
              style={{ border: "1px solid var(--border-medium)" }}
            >
              Watch demo
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes heroEnter {
          to { opacity: 0.88; transform: rotate(var(--rot)) translateY(0); }
        }
        .hero-image:hover {
          opacity: 1 !important;
          z-index: 20 !important;
          transform: rotate(var(--rot)) translateY(-12px) scale(1.04) !important;
          border-color: rgba(168,85,247,0.6) !important;
          animation-play-state: paused, paused !important;
        }
        @keyframes floatA { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-10px); } }
        @keyframes floatB { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-14px); } }
        @keyframes floatC { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-8px); } }
        @keyframes floatD { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-16px); } }
        @keyframes floatE { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-6px); } }
        @keyframes floatF { 0%,100% { transform: rotate(var(--rot)) translateY(0); } 50% { transform: rotate(var(--rot)) translateY(-12px); } }
        @media (max-width: 768px) {
          .hero-scatter .hero-image { display: none; }
        }
      `}</style>
    </section>
  );
}


function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });
  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="glow-button glow-button-hover"
    >
      {children}
    </motion.button>
  );
}

/* ---------- STATS ---------- */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="text-num-label gradient-text">
      {Math.round(val)}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="relative border-y" style={{ background: "var(--deep)", borderColor: "var(--border-subtle)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="flex flex-col items-center gap-2 px-6 py-12 md:py-16"
            style={{ borderLeft: i > 0 ? "1px solid var(--border-subtle)" : "none" }}
          >
            <CountUp to={s.n} suffix={s.suffix} />
            <span className="text-caption uppercase tracking-[0.25em]">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CAPABILITIES ---------- */
export function Capabilities() {
  useEffect(() => {
    const sections = document.querySelectorAll(".module-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <SectionShell id="capabilities">
      <style>{`
        .module-section .module-number { opacity: 0; transform: translateY(40px); }
        .module-section .module-badge { opacity: 0; transform: translateY(8px); }
        .module-section .module-tagline { opacity: 0; }
        .module-section .module-title { opacity: 0; transform: translateX(-16px); }
        .module-section .module-rule { width: 0; opacity: 0; }
        .module-section .module-body { opacity: 0; }
        .module-section .module-image { opacity: 0; transform: translateY(16px); }

        .module-section.is-visible .module-number {
          opacity: 1; transform: translateY(0);
          transition: opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1);
        }
        .module-section.is-visible .module-badge {
          opacity: 1; transform: translateY(0);
          transition: opacity 400ms ease-out, transform 400ms ease-out;
          transition-delay: 100ms;
        }
        .module-section.is-visible .module-tagline {
          opacity: 1;
          transition: opacity 400ms ease-out 200ms;
        }
        .module-section.is-visible .module-title {
          opacity: 1; transform: translateX(0);
          transition: opacity 500ms cubic-bezier(0.16,1,0.3,1) 300ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 300ms;
        }
        .module-section.is-visible .module-rule {
          width: 200px; opacity: 1;
          transition: width 600ms ease-out 500ms, opacity 200ms ease-out 500ms;
        }
        .module-section.is-visible .module-body {
          opacity: 1;
          transition: opacity 400ms ease-out 600ms;
        }
        .module-section.is-visible .module-image {
          opacity: 1; transform: translateY(0);
          transition: opacity 500ms ease-out 400ms, transform 500ms ease-out 400ms;
        }
        .module-rule {
          display: block;
          height: 1px;
          background: #a855f7;
          margin-top: 10px;
          border-radius: 0;
        }
        .module-number {
          font-size: clamp(80px, 12vw, 140px);
          font-weight: 700;
          color: rgba(168, 85, 247, 0.45);
          line-height: 1;
          letter-spacing: -0.02em;
          user-select: none;
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow mb-6">Platform Capabilities</p>
          <h2 className="text-h1">Everything your brand needs.<br /><span className="gradient-text">Nothing it does not.</span></h2>
          <p className="text-body mt-6">Eight production-grade AI modules. One platform. Built for fashion, retail, and commerce at scale.</p>
        </motion.div>

        <div className="mt-24 space-y-28">
          {modules.map((m, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={m.n} className={`module-section grid grid-cols-1 items-center gap-12 lg:grid-cols-12 ${reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-2 [direction:ltr]">
                  <div className="module-number">{m.n}</div>
                </div>
                <div
                  className="hidden h-32 w-px lg:block lg:col-span-1"
                  style={{ background: "linear-gradient(180deg, var(--purple-bright), transparent)" }}
                />
                <div className="lg:col-span-5 [direction:ltr]">
                  <p className="text-eyebrow mb-4 module-badge">{m.tag}</p>
                  <p className="mb-3 text-lg italic text-text-secondary module-tagline">{m.tagline}</p>
                  <h3 className="text-h2 mb-2 module-title">{m.title}</h3>
                  <span className="module-rule" aria-hidden />
                  <p className="text-body mt-5 module-body">{m.desc}</p>
                </div>
                <div className="lg:col-span-4 [direction:ltr] module-image">
                  <div className="group relative overflow-hidden rounded-2xl" style={{ border: "1px solid var(--border-medium)", boxShadow: "var(--card-glow)" }}>
                    {("video" in m && (m as { video?: string }).video) ? (
                      <video
                        src={(m as { video: string }).video}
                        poster={m.img}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="block aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img src={m.img} alt={m.title} className="block aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    )}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(13,11,26,0.85) 100%)" }} />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-primary">Module {m.n}</span>
                      <span className="rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-text-primary" style={{ background: "rgba(150,69,225,0.4)", backdropFilter: "blur(10px)" }}>
                        Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}


/* ---------- GALLERY ---------- */
export function Gallery() {
  return (
    <SectionShell id="gallery" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow mb-6">AI Product Photography</p>
          <h2 className="text-h1">Your products.<br /><span className="gradient-text">Perfected.</span></h2>
        </motion.div>

        <div className="mt-12 overflow-hidden border-y py-4" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="animate-marquee flex gap-12 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 gap-12">
                {["AI Generated", "Virtual Try-On", "Background Removed", "Upscaled 4x", "Catalog Ready", "Text to Video", "Print Ready"].map((t) => (
                  <span key={t} className="flex items-center gap-3"><Sparkles size={12} className="text-pink-vivid" /> {t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <ImageCarousel3D images={productGalleryUnique} />
        </div>

      </div>
    </SectionShell>
  );
}

/* ---------- REMOVE BACKGROUND ---------- */
export function RemoveBackground() {
  const pills = ["Sub-pixel Accuracy", "Any Volume, Any Format", "Fully Automated"];
  return (
    <SectionShell id="remove-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-eyebrow mb-6">Automated · Precise · Production-Ready</p>
          <h2 className="text-h1">Remove<br /><span className="gradient-text">Background</span></h2>
          <p className="text-body mt-6 max-w-lg">Isolate any product from any background with sub-pixel accuracy — at any volume, any format, any deadline. The foundation of great product photography, fully automated.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {pills.map((p) => (
              <span key={p} className="rounded-full px-4 py-2 text-xs font-medium text-text-secondary" style={{ background: "var(--surface)", border: "1px solid var(--border-medium)" }}>{p}</span>
            ))}
          </div>
          <div className="group relative mt-10 overflow-hidden rounded-2xl cursor-pointer" style={{ border: "1px solid var(--border-medium)", boxShadow: "var(--card-glow)", aspectRatio: "4 / 5" }}>
            <img
              src="/handbag_original.png"
              alt="Handbag with background"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
            />
            <img
              src="/handbag_bg_removed.png"
              alt="Handbag isolated"
              className="absolute inset-0 h-full w-full object-contain p-6 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at center, rgba(150,69,225,0.15), transparent 70%)" }}
            />
            <span className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-muted transition-opacity duration-500 group-hover:opacity-0" style={{ background: "rgba(13,11,26,0.75)", backdropFilter: "blur(8px)" }}>Hover to isolate</span>
            <span className="absolute bottom-3 right-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "rgba(152,50,226,0.6)", backdropFilter: "blur(8px)" }}>Isolated</span>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-5">
          {removeBgProducts.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(152,50,226,0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                border: "1px solid var(--border-subtle)",
                aspectRatio: "2 / 3",
                background: "#19152E",
              }}
            >
              <img
                src={p.bg}
                alt={p.name}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 block h-full w-full object-contain transition-opacity duration-500 ease-out group-hover:opacity-0"
              />
              <img
                src={p.nobg}
                alt={`${p.name} isolated`}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 block h-full w-full object-contain opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              />
              <span className="absolute right-2 top-2 rounded-full px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-text-primary opacity-0 transition group-hover:opacity-100" style={{ background: "rgba(152,50,226,0.6)", backdropFilter: "blur(8px)" }}>Isolated</span>
              <span className="absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-text-muted transition group-hover:opacity-0" style={{ background: "rgba(8,6,15,0.7)", backdropFilter: "blur(6px)" }}>Hover</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}


/* ---------- CREATE CATALOG ---------- */
export function CreateCatalog() {
  const channels = catalogChannels;

  return (
    <SectionShell id="catalog">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-eyebrow mb-6">One Upload · Any Channel · Perfect Output</p>
          <h2 className="text-h1">Create<br /><span className="gradient-text">Catalog</span></h2>
          <p className="text-body mt-6 max-w-lg">Upload a garment, select your channel — Amazon, Myntra, Shopify — and receive perfectly formatted marketplace-ready catalogue images. End-to-end. Automated. Accurate.</p>

          <div className="mt-10 relative overflow-hidden rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border-medium)", boxShadow: "var(--card-glow)" }}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, #9645e1, #d946c8)" }}>
                <Upload size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">Upload Garment</p>
                <p className="text-sm text-text-primary">black-bomber-jacket.png</p>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl" style={{ border: "1px solid var(--border-subtle)" }}>
              <img src={catalogUploadImg} alt="" className="block aspect-[16/10] w-full object-cover" />
            </div>
            <div className="mt-4 h-1 overflow-hidden rounded-full" style={{ background: "var(--raised)" }}>
              <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 2.2, ease }} className="h-full" style={{ background: "linear-gradient(90deg, #9645e1, #d946c8)" }} />
            </div>
            <div className="mt-2 flex justify-between text-[0.65rem] uppercase tracking-[0.25em] text-text-muted">
              <span>Processing</span><span>100%</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Marketplace Compliant", "Multiple Formats", "Fully Automated", "Pixel Perfect"].map((p) => (
              <span key={p} className="rounded-full px-3 py-1.5 text-[0.7rem] font-medium text-text-secondary" style={{ background: "var(--surface)", border: "1px solid var(--border-subtle)" }}>{p}</span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <svg className="absolute left-0 top-0 hidden h-full w-full lg:block" preserveAspectRatio="none" viewBox="0 0 400 400" aria-hidden>
            <motion.path d="M0 200 Q120 200 200 80" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="6 6"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.3 }} />
            <motion.path d="M0 200 Q120 200 200 200" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="6 6"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.5 }} />
            <motion.path d="M0 200 Q120 200 200 320" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="6 6"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.7 }} />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9645e1" />
                <stop offset="100%" stopColor="#d946c8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative flex flex-col gap-5">
            {channels.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: 0.4 + i * 0.25 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(150,69,225,0.4)" }}
                className="relative flex items-center gap-4 overflow-hidden rounded-2xl p-4 lg:ml-32"
                style={{ background: "var(--surface)", border: "1px solid var(--border-medium)" }}
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <img src={c.img} alt="" className="block h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-pink-vivid">Channel {String(i + 1).padStart(2, "0")}</p>
                  <p className="text-text-primary mt-1 text-base font-semibold">{c.name}</p>
                  <p className="text-caption mt-0.5">Auto-formatted · Compliant</p>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.8 + i * 0.25 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, #9645e1, #d946c8)", boxShadow: "0 0 20px rgba(150,69,225,0.6)" }}
                >
                  <Check size={16} className="text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8 text-center">
          <p className="text-eyebrow mb-4">Pick Your Channel</p>
          <h3 className="text-h2"><span style={{ color: "#fff" }}>Pick a channel.</span> <span style={{ color: "#c084fc" }}>Open your catalog.</span></h3>
        </motion.div>
        <CatalogIslandSelector />
      </div>

    </SectionShell>
  );
}

/* ---------- UPSCALE ---------- */
export function Upscale() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setIsComplete(false);
      setIsProcessing(true);
      window.setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const reset = () => {
    setImageSrc(null);
    setIsComplete(false);
    setIsProcessing(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <SectionShell id="upscale">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <span className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-pink-vivid" style={{ background: "rgba(217,70,200,0.1)", border: "1px solid rgba(217,70,200,0.3)" }}>AI Enhanced</span>
          <h2 className="text-h1 mt-6">Upscale<br /><span className="gradient-text">Image</span></h2>
          <p className="text-body mt-6">Drop a low-resolution asset into the zone below. MODAIC recovers texture, sharpness, and detail — print-ready 300 DPI in seconds.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-14"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />

          {!imageSrc ? (
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
              onDragLeave={() => setIsDraggingOver(false)}
              onDrop={onDrop}
              onClick={() => inputRef.current?.click()}
              className="relative flex flex-col items-center justify-center gap-5 rounded-[28px] px-8 py-24 text-center cursor-pointer transition-all duration-300"
              style={{
                border: `2px dashed ${isDraggingOver ? "rgba(217,70,200,0.8)" : "rgba(152,50,226,0.4)"}`,
                background: isDraggingOver ? "rgba(152,50,226,0.08)" : "var(--surface)",
                boxShadow: isDraggingOver ? "0 0 60px rgba(152,50,226,0.35)" : "var(--card-glow)",
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "linear-gradient(135deg, #9645e1, #d946c8)", boxShadow: "0 0 30px rgba(152,50,226,0.5)" }}>
                <UploadCloud size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-h3 mb-2" style={{ color: "var(--text-primary)" }}>Drop image to upscale</h3>
                <p className="text-body max-w-md mx-auto">Drag a low-resolution asset here to enhance it to print-ready quality.</p>
              </div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-text-muted">or click to browse</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Before */}
              <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid var(--border-medium)", background: "var(--surface)" }}>
                <img
                  src={imageSrc}
                  alt="Before"
                  className="block aspect-square w-full object-contain"
                  style={{ filter: "blur(1.5px)", imageRendering: "pixelated", opacity: 0.9 }}
                />
                <span className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-muted" style={{ background: "rgba(13,11,26,0.75)", backdropFilter: "blur(8px)" }}>Before · 72 DPI</span>
              </div>

              {/* After */}
              <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid var(--border-active)", background: "var(--surface)", boxShadow: "0 0 50px rgba(217,70,200,0.25)" }}>
                {isProcessing ? (
                  <div className="flex aspect-square w-full items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 size={36} className="animate-spin text-pink-vivid" />
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-text-secondary">Enhancing · 300 DPI</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={imageSrc} alt="After" className="block aspect-square w-full object-contain" />
                    <span className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-text-primary" style={{ background: "rgba(152,50,226,0.6)", backdropFilter: "blur(8px)" }}>After · 300 DPI</span>
                  </>
                )}
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  onClick={reset}
                  className="rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition hover:text-text-primary"
                  style={{ border: "1px solid var(--border-medium)" }}
                >
                  Try another
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionShell>
  );
}


/* ---------- FEATURES GRID ---------- */
const FEATURE_ICONS = [Layers, Brush, Wand2, Palette, Workflow, ImageIcon, Box, Zap, Shield, BarChart3, Repeat, Sliders, Eye, Cloud, Lock];

export function FeatureGrid() {
  return (
    <SectionShell id="features">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow mb-6">Beyond The Core</p>
          <h2 className="text-h1">Built for fashion teams<br /><span className="gradient-text">at every scale.</span></h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, desc], i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
                style={{ background: "var(--surface)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 -translate-x-full opacity-0 transition-opacity duration-700 group-hover:opacity-30 group-hover:translate-x-[400%]" style={{ background: "linear-gradient(90deg, transparent, rgba(217,70,200,0.4), transparent)" }} />
                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:rotate-6" style={{ background: "rgba(150,69,225,0.12)", border: "1px solid var(--border-medium)" }}>
                    <Icon size={18} className="text-pink-vivid" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{title}</h3>
                  <p className="text-caption mt-2 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- MARQUEE ---------- */
export function Marquee() {
  return (
    <section className="relative space-y-px border-y" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="overflow-hidden py-5" style={{ background: "var(--surface)" }}>
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {marketplaces.map((m) => (
                <span key={m} className="flex items-center gap-3"><span className="gradient-text">✦</span> {m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden py-5" style={{ background: "var(--deep)" }}>
        <div className="animate-marquee-reverse flex w-max gap-12 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {marqueeTags.map((m) => (
                <span key={m} className="flex items-center gap-3">◆ {m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function Testimonials() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <p className="text-eyebrow mb-6">Loved by Operators</p>
          <h2 className="text-h2">Built with the brands<br />reshaping commerce.</h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.a}
              initial={{ opacity: 0, rotateX: -15, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border-medium)", boxShadow: "var(--card-glow)" }}
            >
              <span className="absolute -top-4 left-6 text-6xl gradient-text" style={{ fontFamily: "Georgia, serif" }}>"</span>
              <p className="text-text-secondary italic leading-relaxed">{t.q}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">— {t.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- CTA ---------- */
export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32" style={{ background: "linear-gradient(135deg, #13112a 0%, #1a1740 50%, #13112a 100%)" }}>
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(150,69,225,0.35), transparent 70%)", filter: "blur(40px)" }} />
      {/* Floating product hints */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {heroProducts.slice(0, 6).map((src, i) => {
          const pos = [
            { top: "10%", left: "6%" }, { top: "16%", right: "8%" },
            { bottom: "12%", left: "10%" }, { bottom: "18%", right: "12%" },
            { top: "44%", left: "3%" }, { top: "48%", right: "4%" },
          ][i];
          return (
            <motion.img
              key={i}
              src={src}
              alt=""
              style={{ ...pos, width: 110, opacity: 0.12 }}
              className="absolute rounded-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-eyebrow mb-6">Get Started Today</p>
        <h2 className="text-display">Everything your brand needs.<br /><span className="gradient-text">Nothing it does not.</span></h2>
        <p className="text-body mt-8">Join 500+ fashion brands already building with MODAIC.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="glow-button glow-button-hover">Start Creating <ArrowRight size={18} /></button>
          <button className="rounded-full px-8 py-4 text-sm font-medium text-text-primary transition hover:bg-white/5" style={{ border: "1px solid var(--border-active)" }}>Book a Demo</button>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  const cols = [
    { h: "PRODUCT", items: ["AI Image Generation", "Virtual Try-On", "Product to Video", "Create Catalog", "AI Image Editor", "Remove Background", "Upscale Image", "Text to Video"] },
    { h: "COMPANY", items: ["About", "Careers", "Blog", "Press", "Contact"] },
    { h: "RESOURCES", items: ["Documentation", "API Reference", "Status Page", "Changelog"] },
  ];
  return (
    <footer className="relative overflow-hidden pt-24" style={{ background: "var(--deep)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={modaicLogo}
                alt="MODAIC"
                className="h-28 w-auto object-contain sm:h-44 md:h-[240px]"
                style={{ filter: "drop-shadow(0 0 40px rgba(152,50,226,0.55))" }}
              />
            </div>
            <p className="text-body mt-6 max-w-sm">The AI Fashion Creative Suite for brands building at the speed of culture.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-pink-vivid">{c.h}</p>
                <ul className="space-y-3 text-sm text-text-secondary">
                  {c.items.map((i) => <li key={i}><a href="#" className="transition hover:text-text-primary">{i}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t pt-8" style={{ borderColor: "var(--border-subtle)" }}>
          <p className="text-caption">© 2026 Manipal Digital Solutions — MODAIC AI Agent</p>
          <div className="flex gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-text-primary">Privacy</a>
            <a href="#" className="hover:text-text-primary">Terms</a>
            <a href="#" className="hover:text-text-primary">Security</a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
        aria-hidden
        className="pointer-events-none mt-12 text-center font-black leading-[0.85] tracking-tighter"
        style={{ fontSize: "clamp(5rem, 16vw, 16rem)", color: "rgba(100, 70, 160, 0.07)" }}
      >
        MODAIC
      </motion.div>
    </footer>
  );
}
