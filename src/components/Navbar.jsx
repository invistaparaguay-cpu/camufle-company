import { useEffect, useState } from "react";
import { Sparkles, Globe, ChevronRight } from "lucide-react";
import { GOLD_GRADIENT } from "../data/translations.js";

export default function Navbar({ t, lang, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 12);
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      setProgress(Math.min(100, (y / max) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "backdrop-blur-2xl bg-ink/80 border-b border-amber-300/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
          : "backdrop-blur-xl bg-ink/40 border-b border-white/5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ease-out-expo ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-700"
              style={{ background: "radial-gradient(circle, #E6C77A 0%, transparent 70%)" }}
            />
            <div
              className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-700 ease-out-expo group-hover:rotate-[18deg]"
              style={{ background: "linear-gradient(135deg, #C9A24A 0%, #E6C77A 50%, #8B6B2A 100%)" }}
            >
              <Sparkles size={18} className="text-ink" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-serif-display text-white text-lg tracking-wide">Camufle</div>
            <div className="text-[10px] tracking-[0.3em] text-amber-200/60 uppercase">Institute</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-sm text-slate-300/80">
          {[
            { href: "#philosophy", l: t.nav_philosophy },
            { href: "#method", l: t.nav_method },
            { href: "#authority", l: t.nav_authority },
            { href: "#invest", l: t.nav_invest },
          ].map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="link-under hover:text-amber-200 transition-colors duration-300"
            >
              {it.l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-amber-300/40 hover:bg-amber-300/5 transition-all duration-500"
            aria-label="Toggle language"
          >
            <Globe size={14} className="text-amber-200/80 transition-transform duration-700 group-hover:rotate-180" />
            <span className="text-xs tracking-[0.2em] text-slate-200">{lang === "pt" ? "PT" : "ES"}</span>
            <span className="text-slate-500 text-xs">/</span>
            <span className="text-xs tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition">
              {lang === "pt" ? "ES" : "PT"}
            </span>
          </button>

          <a
            href="#invest"
            className="hidden md:inline-flex btn-shine mag-btn items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink hover:shadow-[0_0_30px_rgba(201,162,74,0.55)]"
            style={{ background: GOLD_GRADIENT }}
          >
            {t.nav_cta}
            <ChevronRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[2px] bg-transparent">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #8B6B2A, #E6C77A, #C9A24A)",
            boxShadow: "0 0 10px rgba(230,199,122,0.6)",
          }}
        />
      </div>
    </header>
  );
}
