import { useEffect, useState } from "react";
import {
  Award,
  HeartHandshake,
  Microscope,
  ChevronRight,
  Star,
} from "lucide-react";
import { GOLD_GRADIENT } from "../data/translations.js";

export default function Hero({ t }) {
  // Subtle parallax for the aurora orbs
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative pt-32 pb-28 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full blur-[140px] opacity-30 animate-aurora will-change-transform"
          style={{
            background: "radial-gradient(circle, #C9A24A 0%, transparent 70%)",
            transform: `translate3d(0, ${y * 0.12}px, 0)`,
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full blur-[140px] opacity-20 animate-aurora will-change-transform"
          style={{
            background: "radial-gradient(circle, #6B4A1F 0%, transparent 70%)",
            animationDelay: "2s",
            transform: `translate3d(0, ${y * -0.08}px, 0)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "luminosity",
          }}
        />
        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(6,8,12,0.75) 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div
            className="flex items-center gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-300/60" />
            <span className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase">{t.hero_eyebrow}</span>
          </div>

          <h1
            className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white font-medium animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {t.hero_title_1}{" "}
            <span className="text-gold-shimmer">{t.hero_title_2}</span>{" "}
            <em className="italic font-light text-slate-100">{t.hero_title_3}</em>
          </h1>

          {/* Gold underline accent */}
          <div
            className="mt-6 h-[2px] w-28 origin-left animate-draw-line"
            style={{
              background: "linear-gradient(90deg, #E6C77A, transparent)",
              animationDelay: "650ms",
            }}
          />

          <p
            className="mt-8 text-lg md:text-xl text-slate-300/80 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            {t.hero_sub}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "560ms" }}
          >
            <a
              href="#invest"
              className="group btn-shine mag-btn relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold text-ink hover:shadow-[0_0_50px_rgba(201,162,74,0.6)]"
              style={{ background: GOLD_GRADIENT }}
            >
              {/* Pulsing halo */}
              <span
                className="absolute inset-0 rounded-full -z-10 animate-pulse-soft"
                style={{
                  background: "radial-gradient(circle, rgba(230,199,122,0.55) 0%, transparent 70%)",
                  filter: "blur(18px)",
                }}
              />
              {t.hero_cta}
              <ChevronRight
                size={18}
                className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5"
              />
            </a>
            <a
              href="#method"
              className="inline-flex items-center gap-3 border-b border-white/20 pb-0.5 text-sm text-slate-300/80 hover:text-amber-200 hover:border-amber-300/50 transition-all duration-500"
            >
              {t.hero_secondary}
              <ChevronRight size={14} className="opacity-60" />
            </a>
          </div>

          <div
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "720ms" }}
          >
            {[
              { i: Award, l: t.hero_badge_1 },
              { i: HeartHandshake, l: t.hero_badge_2 },
              { i: Microscope, l: t.hero_badge_3 },
            ].map(({ i: Icon, l }, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-slate-500">
                <Icon size={13} className="text-amber-300/50 shrink-0" />
                <span className="text-[11px] tracking-[0.25em] uppercase">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-scale-in" style={{ animationDelay: "300ms" }}>
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_120px_-30px_rgba(201,162,74,0.45)] group">
            {/* Subtle inner gold ring */}
            <div className="absolute inset-0 rounded-[28px] pointer-events-none ring-1 ring-amber-300/10" />
            <div
              className="aspect-[4/5] w-full transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
              style={{
                backgroundImage: "url('/images/foto_standing.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                filter: "saturate(0.88) contrast(1.05) brightness(0.88)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            {/* Shine sweep across the image on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, transparent 35%, rgba(230,199,122,0.25) 50%, transparent 65%)",
              }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div
                className="h-px w-full mb-5 opacity-40"
                style={{ background: "linear-gradient(90deg, rgba(230,199,122,0.6), transparent)" }}
              />
              <div className="flex items-center gap-1.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={11} className="fill-amber-300 text-amber-300" />
                ))}
              </div>
              <div className="font-serif-display text-white text-2xl leading-tight">{t.hero_proof_title}</div>
              <div className="text-[11px] tracking-[0.2em] text-slate-300/60 mt-1.5 uppercase">{t.hero_proof_sub}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60">
        <div className="text-[10px] tracking-[0.3em] text-amber-200/70 uppercase">Scroll</div>
        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-300/60 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
