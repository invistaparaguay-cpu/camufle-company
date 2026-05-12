import { Sparkles, Mail, Instagram, MapPin } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="border-t border-white/5 bg-[#04060A] relative overflow-hidden">
      {/* Subtle gold hairline at the very top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(230,199,122,0.25), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5 group">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-full opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, #E6C77A 0%, transparent 70%)",
                }}
              />
              <div
                className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-12"
                style={{ background: "linear-gradient(135deg, #C9A24A, #E6C77A)" }}
              >
                <Sparkles size={18} className="text-ink" />
              </div>
            </div>
            <div>
              <div className="font-serif-display text-white text-lg">Camufle Institute</div>
              <div className="text-[10px] tracking-[0.3em] text-amber-200/60 uppercase">
                {t.foot_tag}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-md">{t.foot_about}</p>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.3em] text-amber-200/70 mb-4">
            {t.foot_contact}
          </div>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2 group transition-colors hover:text-amber-100">
              <Mail
                size={14}
                className="text-amber-300/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
              />
              contato@camufleinstitute.com
            </li>
            <li className="flex items-center gap-2 group transition-colors hover:text-amber-100">
              <Instagram
                size={14}
                className="text-amber-300/70 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-[8deg]"
              />
              @camufle.institute
            </li>
            <li className="flex items-center gap-2 group transition-colors hover:text-amber-100">
              <MapPin
                size={14}
                className="text-amber-300/70 transition-transform duration-500 group-hover:scale-110"
              />
              Brasil · Paraguay · LATAM
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.3em] text-amber-200/70 mb-4">{t.foot_nav}</div>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#philosophy" className="link-under hover:text-amber-200 transition-colors">
                {t.nav_philosophy}
              </a>
            </li>
            <li>
              <a href="#method" className="link-under hover:text-amber-200 transition-colors">
                {t.nav_method}
              </a>
            </li>
            <li>
              <a href="#authority" className="link-under hover:text-amber-200 transition-colors">
                {t.nav_authority}
              </a>
            </li>
            <li>
              <a href="#invest" className="link-under hover:text-amber-200 transition-colors">
                {t.nav_invest}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[10px] tracking-[0.25em] text-amber-200/60 uppercase max-w-2xl">
            {t.foot_disc}
          </div>
          <div className="text-xs text-slate-600">{t.foot_rights}</div>
        </div>
      </div>
    </footer>
  );
}
