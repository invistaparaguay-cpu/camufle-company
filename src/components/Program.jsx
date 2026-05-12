import { useRef } from "react";
import {
  Microscope,
  Droplet,
  Palette,
  Syringe,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

function PillarCard({ Icon, title, desc, index }) {
  const ref = useRef(null);

  // Cursor-following radial highlight
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 lift hover:border-amber-300/40 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(230,199,122,0.10), transparent 40%)",
      }}
    >
      {/* Top corner gold accent that grows */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-300/0 via-amber-300/50 to-amber-300/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out-expo origin-center" />

      <div className="flex items-center justify-between mb-6 relative">
        <div className="relative">
          <div
            className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
            style={{
              background: "radial-gradient(circle, rgba(230,199,122,0.4) 0%, transparent 70%)",
            }}
          />
          <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center border border-amber-300/20 bg-amber-300/5 group-hover:border-amber-300/50 group-hover:bg-amber-300/10 transition-all duration-500">
            <Icon
              size={20}
              className="text-amber-300 transition-transform duration-700 ease-out-expo group-hover:rotate-[8deg] group-hover:scale-110"
            />
          </div>
        </div>
        <span className="font-serif-display text-amber-200/30 text-2xl italic transition-all duration-500 group-hover:text-amber-200/60 group-hover:scale-110">
          0{index + 1}
        </span>
      </div>
      <h3 className="font-serif-display text-xl text-white transition-colors duration-500 group-hover:text-amber-50">
        {title}
      </h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Program({ t }) {
  const pillars = [
    { i: Microscope, t: t.p1_t, d: t.p1_d },
    { i: Droplet, t: t.p2_t, d: t.p2_d },
    { i: Palette, t: t.p3_t, d: t.p3_d },
    { i: Syringe, t: t.p4_t, d: t.p4_d },
    { i: ShieldCheck, t: t.p5_t, d: t.p5_d },
    { i: Clock, t: t.p6_t, d: t.p6_d },
  ];

  return (
    <section id="method" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div
        className="absolute -left-32 top-1/3 w-[480px] h-[480px] rounded-full blur-[160px] opacity-15 -z-10"
        style={{ background: "radial-gradient(circle, #C9A24A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-amber-200/70 mb-5">
              {t.content_eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-tight">
              {t.content_title}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">{t.content_sub}</p>
          </Reveal>
        </div>

        <Reveal variant="stagger" className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ i: Icon, t: title, d }, idx) => (
            <PillarCard key={idx} Icon={Icon} title={title} desc={d} index={idx} />
          ))}
        </Reveal>

        {/* Material Kit Visual Proof */}
        <Reveal delay={200} className="mt-16">
          <div className="relative rounded-[28px] border border-white/10 overflow-hidden grid md:grid-cols-2 gap-0">
            {/* Left: caixa Camufle */}
            <div className="relative group overflow-hidden" style={{ minHeight: "320px" }}>
              <div
                className="absolute inset-0 transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
                style={{
                  backgroundImage: "url('/images/camufle_caixa.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.85) brightness(0.75)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[10px] tracking-[0.35em] text-amber-200/70 mb-1">KIT EXCLUSIVO</div>
                <div className="font-serif-display text-white text-lg leading-snug">Material Camufle<br/>entregue presencialmente</div>
              </div>
            </div>
            {/* Right: catálogo sendo folheado */}
            <div className="relative group overflow-hidden" style={{ minHeight: "320px" }}>
              <div
                className="absolute inset-0 transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
                style={{
                  backgroundImage: "url('/images/catalogo.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.85) brightness(0.75)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[10px] tracking-[0.35em] text-amber-200/70 mb-1">CONTEÚDO TÉCNICO</div>
                <div className="font-serif-display text-white text-lg leading-snug">Apostila com domínio<br/>de agulhas 5, 7 e 9 MAG</div>
              </div>
            </div>
            {/* Hairline gold divider between panels */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-amber-300/30 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
