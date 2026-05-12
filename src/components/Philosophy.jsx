import Reveal from "./Reveal.jsx";

export default function Philosophy({ t }) {
  return (
    <section
      id="philosophy"
      className="relative py-32 overflow-hidden border-t border-white/5 grain"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Ambient gold orbs */}
      <div
        className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-25 animate-aurora"
        style={{ background: "radial-gradient(ellipse, #C9A24A 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <div className="text-[10px] tracking-[0.5em] text-amber-200/50 mb-12 uppercase">
            {t.philosophy_eyebrow}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="relative font-serif-display text-3xl md:text-[2.6rem] leading-[1.3] font-light italic">
            {/* Decorative opening quote */}
            <span
              aria-hidden
              className="block font-serif-display text-[5rem] leading-none text-amber-300/20 select-none mb-2"
            >
              {'"'}
            </span>
            <span className="text-white/90">{t.philosophy_quote}</span>
          </blockquote>
        </Reveal>

        <Reveal delay={280} className="flex items-center justify-center gap-6 mt-14">
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(230,199,122,0.4))" }}
          />
          <span className="text-[10px] tracking-[0.4em] text-amber-300/60 uppercase">
            {t.philosophy_caption}
          </span>
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{ background: "linear-gradient(270deg, transparent, rgba(230,199,122,0.4))" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
