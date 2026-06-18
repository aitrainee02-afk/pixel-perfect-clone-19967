import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LETTERS = ["M", "O", "D", "A", "I", "C"];

export function LoadingIntro() {
  const [stage, setStage] = useState(1);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  // Session-skip
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("introPlayed")) {
        setDone(true);
        setMounted(false);
        return;
      }
      sessionStorage.setItem("introPlayed", "true");
    } catch {}
  }, []);

  useEffect(() => {
    if (done) return;
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setStage(2), 400));
    timers.push(window.setTimeout(() => setStage(3), 900));
    timers.push(window.setTimeout(() => setStage(4), 1400));
    timers.push(window.setTimeout(() => setStage(5), 2000));
    timers.push(window.setTimeout(() => setStage(6), 2600));
    timers.push(window.setTimeout(() => setStage(7), 3200));
    timers.push(window.setTimeout(() => setDone(true), 4200));
    timers.push(window.setTimeout(() => setShowSkip(true), 800));
    return () => timers.forEach(clearTimeout);
  }, [done]);

  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => setMounted(false), 1100);
    return () => clearTimeout(t);
  }, [done]);

  const skip = () => {
    if (stage < 7) setStage(7);
    setTimeout(() => setDone(true), 100);
  };

  if (!mounted) return null;

  const exiting = stage >= 7;

  return (
    <div
      className="fixed inset-0 z-[1000] overflow-hidden"
      style={{ pointerEvents: done ? "none" : "auto" }}
      aria-hidden
    >
      {/* Curtain panels */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-black"
        style={{
          transform: exiting ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 900ms cubic-bezier(0.76, 0, 0.24, 1)",
          transitionDelay: exiting ? "100ms" : "0ms",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-black"
        style={{
          transform: exiting ? "translateX(100%)" : "translateX(0)",
          transition: "transform 900ms cubic-bezier(0.76, 0, 0.24, 1)",
          transitionDelay: exiting ? "100ms" : "0ms",
        }}
      />

      {/* Logo group */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          opacity: exiting ? 0 : 1,
          transform: exiting ? "scale(1.4)" : "scale(1)",
          transition:
            "opacity 700ms cubic-bezier(0.4,0,0.2,1), transform 700ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Icon */}
        <div className="relative" style={{ width: 64, height: 64 }}>
          {/* Expanding ring */}
          <div
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: stage >= 3 ? 140 : 64,
              height: stage >= 3 ? 140 : 64,
              border: `1px solid rgba(168,85,247,${stage >= 3 ? 0 : 0.6})`,
              opacity: stage >= 3 ? 0 : 0.8,
              transform: "translate(-50%,-50%)",
              transition:
                "width 600ms ease-out, height 600ms ease-out, opacity 600ms ease-out, border-color 600ms ease-out",
            }}
          />
          <div
            style={{
              opacity: stage >= 2 ? 1 : 0,
              transform:
                stage >= 3
                  ? "scale(1)"
                  : stage >= 2
                  ? "scale(1)"
                  : "scale(0.6)",
              animation:
                stage >= 3 ? "introPulse 500ms ease-in-out" : undefined,
              transition:
                "opacity 500ms cubic-bezier(0.34,1.56,0.64,1), transform 500ms cubic-bezier(0.34,1.56,0.64,1)",
              filter: "drop-shadow(0 0 24px rgba(168,85,247,0.55))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo size={64} />
          </div>
        </div>

        {/* Wordmark */}
        <div
          className="mt-5 flex"
          style={{
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#fff",
          }}
        >
          {LETTERS.map((l, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: stage >= 4 ? 1 : 0,
                transform: stage >= 4 ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 200ms ease-out, transform 200ms ease-out",
                transitionDelay: stage >= 4 ? `${i * 80}ms` : "0ms",
              }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 14,
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "rgba(168,85,247,0.8)",
            textTransform: "uppercase",
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out",
          }}
        >
          AI Fashion Creative Suite
        </div>
      </div>

      {/* Skip button */}
      {showSkip && !exiting && (
        <button
          onClick={skip}
          className="absolute bottom-6 right-6 z-[1001] bg-transparent"
          style={{
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            border: "none",
            transition: "color 200ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
          }
        >
          Skip intro
        </button>
      )}

      <style>{`
        @keyframes introPulse {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.12); }
        }
      `}</style>
    </div>
  );
}
