import { Check } from "lucide-react";
import { plans } from "../data/content.js";

export default function Pricing() {
  return (
    <section id="planos" className="bg-[#03040B] compact-section px-5 lg:px-8">
      <div className="mx-auto compact-container max-w-[1280px]">
        <h2 className="compact-heading font-black">Escolha o plano ideal para você</h2>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl compact-card ${
                plan.featured
                  ? "border border-purple-400/70 bg-purple-900/18 shadow-glow"
                  : "border border-white/10 bg-white/[0.025]"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-7 top-[-18px] rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 px-8 py-3 text-sm font-black">
                  Mais escolhido
                </span>
              )}

              <h3 className="text-xl font-black">{plan.name}</h3>

              <div className="mt-6 flex items-end gap-2">
                <p className="compact-heading font-black">{plan.price}</p>
                {plan.period && <span className="pb-1 text-lg font-bold text-white/65">{plan.period}</span>}
              </div>

              <p className="mt-3 min-h-12 text-base leading-7 text-white/48">{plan.subtitle}</p>

              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/72">
                    <Check size={17} className="text-white/75" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#planos"
                className={`mt-7 block rounded-xl px-5 py-3.5 text-center font-black transition ${
                  plan.featured
                    ? "primary-btn hover:scale-[1.01]"
                    : "border border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                }`}
              >
                {plan.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
