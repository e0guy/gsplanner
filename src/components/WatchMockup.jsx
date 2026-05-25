export default function WatchMockup() {
  return (
    <div className="float-watch hidden w-[150px] rounded-[2rem] border-[7px] border-[#15151B] bg-[#050711] p-3 shadow-glow lg:block">
      <div className="rounded-[1.5rem] border border-white/10 bg-[#090B16] p-4 text-center">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl border border-purple-400/45 text-lg font-black text-purple-200">GS</div>
        <p className="text-xs font-black">Plano Premium</p>
        <p className="mt-1 text-[10px] text-white/45">Expira em: Vitalício</p>
        <button className="mt-4 rounded-lg border border-purple-400/40 px-4 py-2 text-[10px] font-bold text-purple-200">
          Ver resumo
        </button>
      </div>
    </div>
  );
}
