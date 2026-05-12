import {
  BookOpen,
  Box,
  Sparkles,
  Palette,
  Award,
  HeartHandshake,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Journey({ t }) {
  const steps = [
    { i: BookOpen, l: t.j1 },
    { i: Box, l: t.j2 },
    { i: Sparkles, l: t.j3 },
    { i: Palette, l: t.j4 },
    { i: Award, l: t.j5 },
    { i: HeartHandshake, l: t.j6 },
    { i: TrendingUp, l: t.j7 },
  ];

  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-amber-200/70 mb-5">
              {t.journey_eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-display text-4xl md:text-5xl text-white leading-tight">
              {t.journey_title}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-lg text-slate-400">{t.journey_sub}</p>
          </Reveal>
        </div>

        <Reveal variant="stagger" className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ i: Icon, l }, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 lift hover:border-amber-300/40 overflow-hidden"
            >
              {/* Connecting accent line at top */}
              <div className="pointer-events-none absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-amber-300/0 via-amber-300/50 to-amber-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex items-start justify-between">
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(230,199,122,0.4) 0%, transparent 70%)",
                    }}
                  />
                  <Icon
                    size={20}
                    className="relative text-amber-300 transition-transform duration-500 ease-out-expo group-hover:rotate-[10deg] group-hover:scale-110"
                  />
                </div>
                <span className="font-serif-display text-amber-200/40 italic text-sm transition-colors duration-500 group-hover:text-amber-200/80">
                  0{idx + 1}
                </span>
              </div>
              <div className="mt-6 text-white text-sm leading-snug transition-colors duration-500 group-hover:text-amber-50">
                {l}
              </div>
            </div>
          ))}

          {/* Final "destination" card */}
          <div
            className="group relative rounded-2xl p-6 flex items-center justify-center text-center overflow-hidden lift"
            style={{
              background:
                "linear-gradient(135deg, rgba(230,199,122,0.18), rgba(201,162,74,0.06))",
              border: "1px solid rgba(230,199,122,0.30)",
            }}
          >
            {/* Subtle rotating conic glow */}
            <div className="pointer-events-none absolute -inset-12 opacity-30">
              <div
                className="w-full h-full conic-border opacity-40"
                style={{ filter: "blur(40px)" }}
              />
            </div>
            <div className="relative">
              <div className="relative inline-flex">
                <span
                  className="absolute inset-0 rounded-full blur-xl opacity-70 animate-pulse-soft"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(230,199,122,0.6) 0%, transparent 70%)",
                  }}
                />
                <GraduationCap
                  size={28}
                  className="relative text-amber-300 mx-auto mb-2 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="font-serif-display text-white text-lg italic leading-tight mt-2">
                {t.journey_final}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
