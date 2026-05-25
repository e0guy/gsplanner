// Seção de relatórios: comunica visão completa, segurança e compartilhamento.
import { CalendarCheck, ChartNoAxesCombined, Share2, ShieldCheck } from 'lucide-react';
import { LaptopMockup } from '../components/Mockups.jsx';

const items = [
  ['Visão completa', 'Tenha uma visão geral de tudo que importa para você.', CalendarCheck],
  ['Relatórios inteligentes', 'Gráficos e relatórios para decisões melhores no seu dia a dia.', ChartNoAxesCombined],
  ['Compartilhe com quem importa', 'Convide amigos, familiares e colabore em tempo real.', Share2],
  ['Segurança de ponta', 'Seus dados protegidos com criptografia e backup automático.', ShieldCheck],
];

export default function Reports() {
  return (
    <section className="reports section-pad">
      <div className="proof-bar">
        <Stat value="+2.500" label="Usuários ativos" />
        <Stat value="+1.200" label="Eventos criados" />
        <Stat value="+R$ 500k" label="Transacionados" />
        <Stat value="100%" label="Seguro e protegido" />
      </div>
      <h2>Tudo que você precisa <span>em um só lugar</span></h2>
      <div className="reports-grid">
        <div className="report-list">{items.map(([t,d,Icon])=><article key={t}><Icon/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
        <LaptopMockup report />
      </div>
    </section>
  );
}
function Stat({value,label}) { return <div className="stat"><strong>{value}</strong><small>{label}</small></div>; }
