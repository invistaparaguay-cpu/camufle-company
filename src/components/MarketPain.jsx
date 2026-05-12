import Reveal from "./Reveal.jsx";

export default function MarketPain({ t }) {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Hairline full-width gold rule at top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(230,199,122,0.35) 30%, rgba(230,199,122,0.35) 70%, transparent 100%)" }}
      />

      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,74,0.09) 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">

          {/* Left: eyebrow + giant headline */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[10px] tracking-[0.45em] text-amber-200/50 mb-8 uppercase">
                O Cenário Atual
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] font-medium">
                {t.market_title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div
                className="mt-8 h-[1px] w-20"
                style={{ background: "linear-gradient(90deg, #E6C77A, transparent)" }}
              />
            </Reveal>
          </div>

          {/* Right: body text + vertical rule */}
          <div className="lg:col-span-7 lg:pl-12 relative">
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, transparent, rgba(230,199,122,0.2) 40%, rgba(230,199,122,0.2) 60%, transparent)" }}
            />
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-slate-300/70 leading-relaxed font-light">
                {t.market_text}
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
