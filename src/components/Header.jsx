import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/content.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050610]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex compact-container max-w-[1280px] items-center justify-between px-5 py-3 lg:px-8">
        <a href="https://gsyntra.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2" title="Conheça a GSYNTRA Tecnologia">
          <span className="grid h-9 w-12 place-items-center rounded-lg border border-purple-400/70 bg-black/35 text-lg font-black italic tracking-tight text-white shadow-glow">
            GS
          </span>
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-lg font-black tracking-[0.18em] text-transparent">
            PLANNER
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-white/78 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#login" className="rounded-xl border border-white/12 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/5">
            Entrar
          </a>
          <a href="#planos" className="primary-btn rounded-xl px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.02]">
            Criar conta grátis
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-3 xl:hidden" aria-label="Abrir menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050610] px-5 py-5 xl:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/75">
                {item.label}
              </a>
            ))}
            <a href="#planos" className="primary-btn rounded-xl px-6 py-3 text-center font-bold">
              Criar conta grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
