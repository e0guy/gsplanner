// Mockups desenhados em HTML/CSS para evitar imagens pesadas e manter carregamento rápido.
import { Search, Bell, Calendar, Wallet, CheckSquare, FileText, BarChart3 } from 'lucide-react';

export function LaptopMockup({ report = false }) {
  return (
    <div className="laptop-frame">
      <div className="screen-top"><span /> <span /> <span /></div>
      <div className="app-ui">
        <aside className="app-sidebar">
          <b>GS <small>PLANNER</small></b>
          {['Início', 'Agenda', 'Financeiro', 'Eventos', 'Tarefas', 'Notas'].map((i, idx) => <span className={idx === (report ? 5 : 0) ? 'active' : ''} key={i}>{i}</span>)}
        </aside>
        <section className="app-content">
          <div className="app-header">
            <div><b>{report ? 'Relatórios' : 'Olá, Manuela! 👋'}</b><small>{report ? 'Ganhos por mês e categorias' : 'Tenha um dia leve e produtivo.'}</small></div>
            <div className="icon-row"><Search size={16} /><Bell size={16} /><span className="avatar" /></div>
          </div>
          {report ? <ReportPanel /> : <DashboardPanel />}
        </section>
      </div>
    </div>
  );
}

function DashboardPanel() {
  return (
    <>
      <div className="stats-grid">
        <Metric title="Saldo disponível" value="R$ 1.240,00" />
        <Metric title="Gastos do mês" value="R$ 760,00" />
        <Metric title="Eventos" value="12" />
        <Metric title="Tarefas" value="8" />
      </div>
      <div className="dashboard-grid">
        <div className="panel"><b>Agenda de hoje</b><p>Reunião • Academia • Jantar</p><div className="line" /><div className="line short" /></div>
        <div className="panel"><b>Visão financeira</b><div className="donut" /><p>Alimentação 35% • Transporte 25%</p></div>
      </div>
      <div className="event-row"><CardIcon title="Aniversário" /><CardIcon title="Viagem" /><CardIcon title="Churrasco" /></div>
    </>
  );
}

function ReportPanel() {
  return (
    <>
      <div className="report-grid">
        <div className="panel large"><b>Ganhos por mês</b><div className="chart-bars">{Array.from({length: 12}).map((_,i)=><span key={i} style={{height: `${28 + (i%5)*18}px`}} />)}</div></div>
        <div className="panel"><b>Gestão por categoria</b><div className="donut multi" /><p>Moradia • Lazer • Outros</p></div>
      </div>
      <div className="panel"><b>Síntese estratégica</b><div className="line" /><div className="line" /><div className="line short" /></div>
    </>
  );
}

function Metric({ title, value }) { return <div className="metric"><small>{title}</small><strong>{value}</strong></div>; }
function CardIcon({ title }) { return <div className="mini-card"><span className="mini-emoji">🎉</span><small>{title}</small></div>; }

export function PhoneMockup({ type='finance' }) {
  const Icon = type === 'agenda' ? Calendar : type === 'tasks' ? CheckSquare : type === 'notes' ? FileText : Wallet;
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-head"><Icon size={18} /><span>{type === 'agenda' ? 'Agenda' : type === 'tasks' ? 'Tarefas' : type === 'notes' ? 'Notas' : 'Financeiro'}</span></div>
      <div className="phone-card purple">{type === 'finance' ? 'R$ 41,60' : 'Hoje'}</div>
      <div className="phone-list">{['Casa', 'Transporte', 'Almoço', 'App'].map((item, idx)=><p key={item}><span>{item}</span><b>{idx%2?'09:00':'R$ 8,50'}</b></p>)}</div>
      <div className="phone-nav"><span/><span/><span className="active"/><span/></div>
    </div>
  );
}

export function WatchMockup() {
  return <div className="watch"><span className="watch-logo">GS</span><small>Planejamento<br/>Análise mais.</small><b>0h30</b></div>;
}
