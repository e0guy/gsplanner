import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMockup from "../components/DashboardMockup.jsx";
import PhoneMockup from "../components/PhoneMockup.jsx";
import WatchMockup from "../components/WatchMockup.jsx";
import { brands, heroBadges } from "../data/content.js";

export default function Hero() {
  return (
    <section id="inicio" className="hero-bg relative overflow-hidden px-5 pt-28 lg:px-8">
      <div className="relative z-10 mx-auto grid compact-container max-w-[1280px] hero-grid grid-cols-[0.78fr_1.22fr] items-center gap-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <span className="inline-flex rounded-full border border-purple-400/35 bg-purple-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-purple-200">
            Organize sua vida. Planeje seus dias. Conquiste seus objetivos.
          </span>

          <h1 className="hero-title mt-6 hero-title font-black tracking-tight">
            Seu dia, suas metas, <br />
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-300 bg-clip-text text-transparent">
              seu futuro.
            </span>
          </h1>

          <p className="mt-5 max-w-lg compact-text text-white/66">
            O GS Planner é o aplicativo completo para organizar sua rotina, controlar suas finanças, gerenciar eventos e realizar mais em menos tempo.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a href="#planos" className="primary-btn inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 font-bold transition hover:scale-[1.02]">
              Começar gratuitamente
              <ArrowRight size={20} />
            </a>
            <a href="#funcionalidades" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/12 bg-black/20 px-6 py-3.5 font-bold text-white/90 transition hover:border-purple-300/40 hover:bg-white/5">
              Ver demonstração
              <PlayCircle size={20} />
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm font-medium text-white/72">
                <CheckCircle2 size={18} className="text-purple-300" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative hero-visual-wrap" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }}>
          <div className="mockup-scale"><DashboardMockup /></div>
          <div className="absolute -right-2 top-10 hidden xl:block">
            <div className="phone-scale"><PhoneMockup /></div>
          </div>
          <div className="absolute -right-24 top-64">
            <div className="watch-scale"><WatchMockup /></div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-12 compact-container max-w-[1280px] border-t border-white/10 py-6">
        <div className="grid items-center gap-8 lg:grid-cols-[250px_1fr]">
          <p className="text-sm text-white/54">
            Mais de <strong className="text-white">2.500 pessoas</strong> já transformam sua rotina com o GS Planner
          </p>
          <div className="overflow-hidden">
            <div className="brand-track flex w-max items-center gap-14">
              {[...brands, ...brands].map((brand, index) => (
                <span key={`${brand}-${index}`} className="text-lg font-black tracking-tight text-white/42">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
