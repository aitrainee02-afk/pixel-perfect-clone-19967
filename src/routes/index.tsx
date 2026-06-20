import { createFileRoute } from "@tanstack/react-router";
import { LoadingIntro } from "@/components/modaic/LoadingIntro";
import { Navbar } from "@/components/modaic/Navbar";
import { CursorGlow, ScrollProgress, AmbientOrbs, SectionDots } from "@/components/modaic/Effects";
import {
  Hero, Capabilities, Gallery, RemoveBackground,
  Marquee, FinalCTA, Footer,
} from "@/components/modaic/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MODAIC — AI Fashion Creative Suite" },
      { name: "description", content: "Eight production-grade AI modules for fashion, retail, and commerce. Studio output. Zero studio." },
      { property: "og:title", content: "MODAIC — AI Fashion Creative Suite" },
      { property: "og:description", content: "Studio output. Zero studio. The AI creative suite built for brands moving at the speed of culture." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: ModaicLanding,
});

function ModaicLanding() {
  return (
    <div className="relative">
      <LoadingIntro />
      <CursorGlow />
      <ScrollProgress />
      <SectionDots />
      <Navbar />

      <main className="relative">
        <div className="relative">
          <AmbientOrbs />
          <Hero />
        </div>
        <div className="relative">
          <AmbientOrbs />
          <Capabilities />
        </div>
        <Gallery />
        <div className="relative">
          <AmbientOrbs />
          <RemoveBackground />
        </div>
        <div className="relative">
          <AmbientOrbs />
          <Upscale />
        </div>
        <Marquee />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
