import Reveal from "./Reveal.jsx";
import useInView from "../hooks/useInView.js";
import useCountUp from "../hooks/useCountUp.js";

function AnimatedStat({ template, label, value, decimal, prefix }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const display = useCountUp({ value, start: inView, template, duration: 1800 });
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 lift hover:border-amber-300/30 hover:bg-amber-300/[0.03] overflow-hidden"
    >
      {/* Hover gold sweep */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(230,199,122,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative font-serif-display text-3xl">
        <span className="text-gold-gradient">{display}</span>
      </div>
      <div className="relative mt-2 text-xs tracking-wider text-slate-400 uppercase">{label}</div>
    </div>
  );
}

export default function Authority({ t }) {
  // Parse numeric values out of the templated strings ("+7", "+1.200")
  const stats = [
    { template: t.ceo_stat_1_n, value: 7, label: t.ceo_stat_1_l },
    { template: t.ceo_stat_2_n, value: 1200, label: t.ceo_stat_2_l },
  ];

  return (
    <section id="authority" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div
        className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full blur-[140px] opacity-15 -z-10"
        style={{ background: "radial-gradient(circle, #C9A24A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal variant="left" className="lg:col-span-5">
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 group">
            {/* Gold curtain reveal (handled by useInView on the wrapping Reveal) */}
            <div
              className="aspect-[4/5] transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
              style={{
                backgroundImage: "url('/images/foto_cadeira.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                filter: "saturate(0.92) contrast(1.05)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(6,8,12,0.88) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[11px] tracking-[0.3em] text-amber-200/80 mb-1">
                CEO &amp; FOUNDER
              </div>
              <div className="font-serif-display text-3xl text-white">Mariana Sansin</div>
            </div>

          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-amber-200/70 mb-5">{t.ceo_eyebrow}</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-tight">
              {t.ceo_name}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-2 text-amber-200/80 text-sm tracking-wide">{t.ceo_role}</div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-lg text-slate-300/80 leading-relaxed">{t.ceo_desc}</p>
          </Reveal>

          <Reveal variant="stagger" delay={320} className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <AnimatedStat
                key={i}
                template={s.template}
                value={s.value}
                label={s.label}
              />
            ))}
            {/* Static (geographic) stat */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 lift hover:border-amber-300/30 hover:bg-amber-300/[0.03] overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(230,199,122,0.08) 0%, transparent 60%)",
                }}
              />
              <div className="relative font-serif-display text-3xl">
                <span className="text-gold-gradient">{t.ceo_stat_3_n}</span>
              </div>
              <div className="relative mt-2 text-xs tracking-wider text-slate-400 uppercase">
                {t.ceo_stat_3_l}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
