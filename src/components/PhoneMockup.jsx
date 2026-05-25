import { ArrowLeft, Bell } from "lucide-react";

export default function PhoneMockup({ small = false }) {
  return (
    <div className={`${small ? "w-[190px]" : "w-[220px]"} rounded-[2.4rem] border-[7px] border-[#101018] bg-[#050711] p-3 shadow-glow float-phone`}>
      <div className="mx-auto mb-3 h-5 w-24 rounded-b-2xl bg-black" />

      <div className="rounded-[1.7rem] border border-white/10 bg-[#090B16] p-3">
        <div className="mb-4 flex items-center justify-between">
          <ArrowLeft size={16} className="text-white/70" />
          <p className="text-sm font-black">Financeiro</p>
          <Bell size={15} className="text-white/55" />
        </div>

        <div className="mb-4 flex gap-2 text-[10px]">
          <span className="rounded-full bg-purple-600 px-3 py-1.5 font-bold">Resumo do dia</span>
          <span className="rounded-full bg-white/5 px-3 py-1.5 text-white/45">Ontem</span>
          <span className="rounded-full bg-white/5 px-3 py-1.5 text-white/45">Outros</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[10px] text-white/42">Seu limite diário</p>
            <p className="mt-2 text-base font-black">R$ 65,00</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[10px] text-white/42">Você gastou hoje</p>
            <p className="mt-2 text-base font-black">R$ 23,40</p>
          </div>
        </div>

        <div className="mt-3 rounded-xl bg-gradient-to-br from-purple-700 to-purple-950 p-3">
          <p className="text-[10px] text-purple-100/80">Ainda pode gastar</p>
          <p className="mt-1 text-xl font-black">R$ 41,60</p>
          <div className="mt-3 h-1.5 rounded-full bg-white/20">
            <div className="h-full w-3/5 rounded-full bg-white" />
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-3 text-xs font-black">Gastos de hoje</p>
          {[
            ["Café da manhã", "08:15", "R$ 6,50"],
            ["Transporte", "08:45", "R$ 4,90"],
            ["Almoço", "13:10", "R$ 29,00"],
            ["Água", "15:20", "R$ 3,00"],
            ["Lanche", "17:40", "R$ 7,90"],
          ].map(([item, hour, value]) => (
            <div key={item} className="mb-2 grid grid-cols-[1fr_auto_auto] gap-2 text-[10px] text-white/55">
              <span>{item}</span>
              <span>{hour}</span>
              <strong className="text-white/75">{value}</strong>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs font-bold text-purple-300">Ver relatório completo</p>
      </div>
    </div>
  );
}
