import { ChevronRight } from "lucide-react";
import { GOLD_GRADIENT } from "../data/translations.js";
import Reveal from "./Reveal.jsx";

export default function FinalCTA({ t }) {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Layered aurora glow */}
      <div
        className="absolute inset-0 -z-10 opacity-40 animate-aurora"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,162,74,0.32) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-20 animate-aurora"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(139,107,42,0.4) 0%, transparent 60%)",
          animationDelay: "3s",
        }}
      />

      {/* Top + bottom gold hairlines */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(230,199,122,0.5), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(230,199,122,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text side */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-amber-200/80 mb-6">
              {t.final_eyebrow}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              <span className="text-white">{t.final_title}</span>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl">{t.final_sub}</p>
          </Reveal>

          <Reveal variant="scale" delay={340}>
            <a
              href="#"
              className="group btn-shine mag-btn relative mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-semibold text-ink hover:shadow-[0_0_60px_rgba(201,162,74,0.7)]"
              style={{ background: GOLD_GRADIENT }}
            >
              <span
                className="absolute inset-0 rounded-full -z-10 animate-pulse-soft"
                style={{
                  background:
                    "radial-gradient(circle, rgba(230,199,122,0.6) 0%, transparent 70%)",
                  filter: "blur(22px)",
                }}
              />
              {t.final_cta}
              <ChevronRight
                size={18}
                className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Image side */}
        <Reveal variant="right" className="lg:col-span-5 hidden lg:block">
          <div className="relative rounded-[28px] overflow-hidden border border-amber-300/20 shadow-[0_30px_80px_-20px_rgba(201,162,74,0.35)] group">
            <div className="absolute inset-0 rounded-[28px] pointer-events-none ring-1 ring-amber-300/15" />
            <div
              className="aspect-[3/4] w-full transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
              style={{
                backgroundImage: "url('/images/foto_marca.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                filter: "saturate(0.9) contrast(1.05) brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            {/* Brand label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[10px] tracking-[0.35em] text-amber-200/70 mb-1">CAMUFLE INSTITUTE</div>
              <div className="font-serif-display text-white text-lg italic">Onde a ciência encontra a arte.</div>
            </div>
            {/* Shine hover sweep */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(120deg, transparent 35%, rgba(230,199,122,0.18) 50%, transparent 65%)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
