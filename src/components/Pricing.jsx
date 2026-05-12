import { Check, ChevronRight, Crown, Lock } from "lucide-react";
import { GOLD_GRADIENT } from "../data/translations.js";
import Reveal from "./Reveal.jsx";

function AdvancedCard({ t }) {
  return (
    <Reveal variant="left">
      <div className="group relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 lg:p-10 lift hover:border-amber-300/30 overflow-hidden h-full">
        {/* Subtle hover sheen */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
          style={{ background: "radial-gradient(circle, #C9A24A 0%, transparent 70%)" }}
        />
        <div className="text-[11px] tracking-[0.3em] text-slate-400">{t.card1_tag}</div>
        <h3 className="font-serif-display mt-3 text-3xl text-white">{t.card1_name}</h3>
        <div className="mt-6 flex items-end gap-2">
          <span className="font-serif-display text-5xl text-white">{t.card1_price}</span>
        </div>
        <div className="text-xs text-slate-500 mt-1">{t.card1_price_sub}</div>

        <Reveal variant="stagger" className="mt-8 space-y-3 text-sm" as="ul">
          {t.card1_items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300">
              <span className="mt-0.5 shrink-0 text-amber-300">
                <Check size={16} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </Reveal>

        <a
          href="#"
          className="mt-10 btn-shine mag-btn w-full inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-white/5 py-4 text-sm font-medium text-amber-100 hover:bg-amber-300/10 transition"
        >
          {t.card1_cta}
          <ChevronRight size={16} />
        </a>
      </div>
    </Reveal>
  );
}

function PremiumCard({ t }) {
  return (
    <Reveal variant="right">
      <div className="relative h-full group">
        {/* Outer animated gold gradient border */}
        <div
          className="absolute -inset-[1.5px] rounded-[34px] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(135deg, #E6C77A 0%, #C9A24A 50%, #6B4A1F 100%)",
          }}
        />
        {/* Rotating conic accent (visible only on hover) */}
        <div className="absolute -inset-[1.5px] rounded-[34px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -inset-[60%] conic-border" style={{ opacity: 0.7 }} />
        </div>

        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse-soft"
          style={{ background: "radial-gradient(circle, #E6C77A 0%, transparent 70%)" }}
        />

        <div className="relative rounded-[30px] bg-[#0A0D14] p-8 lg:p-10 h-full overflow-hidden">
          {/* Top "Most Popular" ribbon */}
          <div className="absolute -top-3 right-8 z-10">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-ink shadow-[0_8px_30px_-5px_rgba(201,162,74,0.6)]"
              style={{ background: GOLD_GRADIENT }}
            >
              <Crown size={12} />
              {t.card2_tag}
            </div>
          </div>

          <div className="text-[11px] tracking-[0.3em] text-amber-200/80">CAMUFLE EXCLUSIVE</div>
          <h3 className="font-serif-display mt-3 text-3xl text-white">{t.card2_name}</h3>
          <div className="mt-6 flex items-end gap-2">
            <span className="font-serif-display text-5xl">
              <span className="text-gold-shimmer">{t.card2_price}</span>
            </span>
          </div>
          <div className="text-xs text-slate-500 mt-1">{t.card2_price_sub}</div>

          <Reveal variant="stagger" className="mt-8 space-y-3 text-sm" as="ul">
            {t.card2_items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-200">
                <div
                  className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(230,199,122,0.5)]"
                  style={{ background: "linear-gradient(135deg, #E6C77A, #C9A24A)" }}
                >
                  <Check size={10} className="text-ink" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </Reveal>

          <a
            href="#"
            className="mt-10 btn-shine mag-btn relative w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-ink hover:shadow-[0_0_50px_rgba(201,162,74,0.65)]"
            style={{ background: GOLD_GRADIENT }}
          >
            <span
              className="absolute inset-0 rounded-full -z-10 animate-pulse-soft opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(230,199,122,0.55) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            {t.card2_cta}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Pricing({ t }) {
  return (
    <section id="invest" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(230,199,122,0.4), transparent)",
        }}
      />
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-15 -z-10"
        style={{ background: "radial-gradient(ellipse, #C9A24A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-amber-200/70 mb-5">
              {t.invest_eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-tight">
              {t.invest_title}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-lg text-slate-400">{t.invest_sub}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          <AdvancedCard t={t} />
          <PremiumCard t={t} />
        </div>

        <Reveal delay={240} className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Lock size={12} />
          <span>{t.invest_secure}</span>
        </Reveal>
      </div>
    </section>
  );
}
