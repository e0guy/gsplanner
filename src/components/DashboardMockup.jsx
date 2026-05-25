import { CalendarDays, Search, Bell, Home, WalletCards, Users, ListTodo, NotebookText, BarChart3, Settings } from "lucide-react";

const menu = [
  ["Início", Home],
  ["Agenda", CalendarDays],
  ["Financeiro", WalletCards],
  ["Eventos", Users],
  ["Tarefas", ListTodo],
  ["Notas", NotebookText],
  ["Relatórios", BarChart3],
  ["Metas", BarChart3],
  ["Configurações", Settings],
];

function Sidebar() {
  return (
    <aside className="hidden w-28 shrink-0 rounded-l-[1.5rem] border-r border-white/10 bg-black/30 p-4 md:block">
      <div className="mb-6 flex items-center gap-1">
        <span className="rounded-md border border-purple-400/50 px-1.5 py-0.5 text-[10px] font-black text-purple-200">GS</span>
        <span className="text-[10px] font-black tracking-widest text-white/70">PLANNER</span>
      </div>

      <div className="space-y-1.5">
        {menu.map(([label, Icon], index) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] ${
              index === 0 ? "bg-purple-600 text-white" : "text-white/45"
            }`}
          >
            <Icon size={12} />
            {label}
          </div>
        ))}
      </div>
    </aside>
  );
}

function StatCard({ label, value, help }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-[11px] text-white/45">{label}</p>
      <p className="mt-2 text-lg font-black text-white">{value}</p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
        <div className="h-full w-2/3 rounded-full bg-purple-500" />
      </div>
      <p className="mt-2 text-[10px] text-white/35">{help}</p>
    </div>
  );
}

function EventCard({ title, place }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
      <p className="text-xs font-bold text-white">{title}</p>
      <p className="mt-1 text-[10px] text-white/45">{place}</p>
      <div className="mt-3 flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="h-5 w-5 rounded-full border border-[#111] bg-purple-300/80" />
        ))}
      </div>
    </div>
  );
}

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[800px]">
      <div className="absolute -bottom-5 left-10 right-10 h-4 rounded-full bg-black/70 blur-sm" />

      <div className="relative rounded-[1.8rem] border border-purple-300/25 bg-[#050711] p-2 shadow-glowStrong">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />

        <div className="flex min-h-[390px] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#080A14]">
          <Sidebar />

          <div className="flex-1 p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black">Olá, Manuela! 👋</h3>
                <p className="text-xs text-white/45">Tenha um dia incrível e produtivo.</p>
              </div>

              <div className="flex items-center gap-3 text-white/45">
                <Search size={16} />
                <Bell size={16} />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-300 to-orange-300" />
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-4">
              <StatCard label="Saldo disponível" value="R$ 1.240,00" help="em contas" />
              <StatCard label="Gastos do mês" value="R$ 760,00" help="de R$ 3.000,00" />
              <StatCard label="Eventos este mês" value="12" help="próximos eventos" />
              <StatCard label="Tarefas pendentes" value="8" help="tarefas para concluir" />
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-sm font-black">Agenda de hoje</p>
                <p className="mt-1 text-[11px] text-white/42">23 de Maio, Sexta-feira</p>

                <div className="mt-4 space-y-3">
                  {[
                    ["Reunião com cliente", "Trabalho", "08:00"],
                    ["Academia", "Saúde", "18:00"],
                    ["Jantar com a família", "Pessoal", "20:00"],
                  ].map(([title, tag, time], index) => (
                    <div key={title} className="flex items-center justify-between border-l-2 border-purple-500 pl-3">
                      <div>
                        <p className="text-xs font-bold">{title}</p>
                        <p className="text-[10px] text-white/38">{tag}</p>
                      </div>
                      <span className="text-[10px] text-white/45">{time}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs font-bold text-purple-300">Ver agenda completa</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black">Visão geral financeira</p>
                  <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">Este mês</span>
                </div>

                <div className="mt-5 grid grid-cols-[110px_1fr] items-center gap-3">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[conic-gradient(#7c3aed_0_35%,#22c55e_35%_60%,#f59e0b_60%_80%,#475569_80%_100%)]">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-[#080A14] text-xs font-black">R$ 760,00</div>
                  </div>

                  <div className="space-y-2 text-[10px]">
                    {["Alimentação 35%", "Transporte 25%", "Moradia 20%", "Lazer 10%", "Outros 10%"].map((item) => (
                      <p key={item} className="text-white/55">● {item}</p>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-xs font-bold text-purple-300">Ver relatório completo</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black">Próximos eventos</p>
                <p className="text-xs text-purple-300">Ver todos eventos</p>
              </div>
              <div className="grid gap-3 lg:grid-cols-3">
                <EventCard title="Aniversário da Manu 🎉" place="Casa da Luísa" />
                <EventCard title="Viagem Praia 🏖️" place="Porto Seguro - BA" />
                <EventCard title="Churrasco de Sábado" place="Casa do Lucas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
