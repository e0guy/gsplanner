import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/content.js";

export default function Testimonials() {
  return (
    <section className="border-y border-white/8 bg-[#03040B] compact-section px-5 lg:px-8">
      <div className="mx-auto compact-container max-w-[1280px]">
        <h2 className="text-center compact-heading font-black">O que nossos usuários dizem</h2>

        <div className="relative mt-9">
          <button className="absolute -left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur md:-left-5">
            <ChevronLeft />
          </button>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="glass-card rounded-2xl compact-card">
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
                </div>

                <p className="compact-text font-semibold text-white/78">“{item.quote}”</p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-purple-400 to-orange-300 text-sm font-black text-black">
                    {item.photo}
                  </div>
                  <div>
                    <h3 className="font-black">{item.name}</h3>
                    <p className="mt-1 text-sm text-white/45">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="absolute -right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur md:-right-5">
            <ChevronRight />
          </button>

          <div className="mt-6 flex justify-center gap-4">
            <span className="h-4 w-4 rounded-full bg-purple-500 shadow-glow" />
            <span className="h-4 w-4 rounded-full bg-white/28" />
            <span className="h-4 w-4 rounded-full bg-white/28" />
          </div>
        </div>
      </div>
    </section>
  );
}
