import { CheckCircle2, CalendarDays, Wallet, Target, BarChart3, ShieldCheck } from "lucide-react";

/*
  Seção de apresentação do produto.
  Substitui a antiga área com vários celulares repetidos por um dashboard visual mais premium,
  transmitindo mais valor de produto SaaS real.
*/
export default function RoutineShowcase() {
  const benefits = [
    "Organização diária com visão clara",
    "Metas, tarefas e finanças no mesmo painel",
    "Relatórios simples para tomar melhores decisões",
    "Experiência rápida, moderna e segura"
  ];

  return (
    <section className="routine section-pad" id="recursos">
      <div className="section-copy">
        <span className="kicker">Simples, moderno e completo</span>

        <h2>
          Planejamento inteligente para sua rotina.
        </h2>

        <p>
          Organize tarefas, metas, finanças e compromissos em uma experiência visual,
          rápida e intuitiva. Tudo pensado para você ganhar clareza, foco e controle no dia a dia.
        </p>

        <div className="benefit-list">
          {benefits.map((item) => (
            <div className="check" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="smart-showcase">
        <div className="showcase-glow"></div>

        <div className="showcase-main">
          <div className="showcase-header">
            <div>
              <small>Visão geral</small>
              <strong>Seu dia sob controle</strong>
            </div>

            <span className="status-pill">Online</span>
          </div>

          <div className="showcase-grid">
            <article className="showcase-card">
              <CalendarDays size={22} />
              <small>Eventos hoje</small>
              <strong>08</strong>
            </article>

            <article className="showcase-card">
              <Wallet size={22} />
              <small>Saldo mensal</small>
              <strong>R$ 1.240</strong>
            </article>

            <article className="showcase-card">
              <Target size={22} />
              <small>Metas ativas</small>
              <strong>12</strong>
            </article>
          </div>

          <div className="analytics-panel">
            <div className="panel-title">
              <BarChart3 size={20} />
              <span>Produtividade semanal</span>
            </div>

            <div className="analytics-bars">
              <span style={{ height: "38%" }}></span>
              <span style={{ height: "58%" }}></span>
              <span style={{ height: "46%" }}></span>
              <span style={{ height: "82%" }}></span>
              <span style={{ height: "64%" }}></span>
              <span style={{ height: "92%" }}></span>
              <span style={{ height: "70%" }}></span>
            </div>
          </div>
        </div>

        <div className="floating-widget widget-one">
          <ShieldCheck size={20} />
          <div>
            <strong>Dados protegidos</strong>
            <small>Segurança e privacidade</small>
          </div>
        </div>

        <div className="floating-widget widget-two">
          <Target size={20} />
          <div>
            <strong>72%</strong>
            <small>das metas concluídas</small>
          </div>
        </div>
      </div>
    </section>
  );
}
