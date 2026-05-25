import { Mail, Apple } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup.jsx";

export default function Newsletter() {
  return (
    <section id="recursos" className="relative bg-[#03040B] compact-section px-5 lg:px-8">
      <div className="mx-auto grid compact-container max-w-[1180px] gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-purple-400/24 bg-gradient-to-br from-purple-950 via-purple-800/70 to-[#12051F] p-7 shadow-glow md:p-10">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-purple-600/20 blur-3xl" />

          <div className="relative z-10">
            <div className="grid gap-6 md:grid-cols-[100px_1fr]">
              <Mail size={66} className="text-purple-100" />
              <div>
                <h2 className="compact-heading font-black">Fique por dentro das novidades</h2>
                <p className="mt-4 compact-text text-white/58">Receba dicas de organização, finanças e produtividade.</p>

                <form className="mt-7 flex max-w-3xl flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="min-h-14 flex-1 rounded-xl border border-white/10 bg-black/20 px-6 text-lg text-white outline-none placeholder:text-white/32 focus:border-purple-300/50"
                  />
                  <button type="button" className="primary-btn rounded-xl px-9 py-3.5 text-lg font-black">
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-black">Leve o GS Planner com você</h3>
              <p className="mt-3 compact-text text-white/52">Baixe agora e tenha tudo na palma da mão.</p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black px-5 py-3">
                  <Apple size={34} />
                  <span>
                    <small className="block text-xs text-white/58">Baixar na</small>
                    <strong className="text-xl">App Store</strong>
                  </span>
                </a>
                <a className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black px-5 py-3">
                  <span className="text-4xl">▶</span>
                  <span>
                    <small className="block text-xs text-white/58">Disponível no</small>
                    <strong className="text-xl">Google Play</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute h-80 w-80 rounded-full bg-purple-700/30 blur-3xl" />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
