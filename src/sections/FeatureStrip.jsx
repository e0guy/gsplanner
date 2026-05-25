import { motion } from "framer-motion";
import { features } from "../data/content.js";

export default function FeatureStrip() {
  return (
    <section id="funcionalidades" className="relative border-t border-white/8 bg-[#03040B] compact-section px-5 lg:px-8">
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto compact-container max-w-[1280px]">
        <h2 className="max-w-lg compact-heading font-black">
          Tudo que você precisa <br />
          <span className="text-purple-500">em um só lugar</span>
        </h2>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                className="group text-center"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .06 }}
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-purple-400/20 bg-purple-500/8 text-purple-400 transition group-hover:-translate-y-1 group-hover:shadow-glow">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-black text-white">{feature.title}</h3>
                <p className="mx-auto mt-3 max-w-[210px] compact-text text-white/50">{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
