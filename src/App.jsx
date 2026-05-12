import { useState } from "react";
import { dict } from "./data/translations.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MarketPain from "./components/MarketPain.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Authority from "./components/Authority.jsx";
import Program from "./components/Program.jsx";
import Journey from "./components/Journey.jsx";
import Pricing from "./components/Pricing.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [lang, setLang] = useState("pt");
  const t = dict[lang];
  const toggleLang = () => setLang((p) => (p === "pt" ? "es" : "pt"));

  return (
    <div className="min-h-screen bg-ink text-slate-200">
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      <Hero t={t} lang={lang} />
      <MarketPain t={t} />
      <Philosophy t={t} />
      <Authority t={t} />
      <Program t={t} />
      <Journey t={t} />
      <Pricing t={t} lang={lang} />
      <FinalCTA t={t} />
      <Footer t={t} lang={lang} />
    </div>
  );
}
