import {
  CalendarDays,
  CircleDollarSign,
  UsersRound,
  SquareCheckBig,
  NotebookText,
  Check,
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const heroBadges = [
  "Fácil de usar",
  "Sincroniza tudo",
  "Seguro e confiável",
  "Disponível em todos os dispositivos",
];

export const brands = ["Google", "Microsoft", "NVIDIA", "SAMSUNG", "mercado livre", "ifood", "amazon"];

export const features = [
  {
    icon: CalendarDays,
    title: "Agenda Inteligente",
    text: "Organize seus compromissos e receba lembretes.",
  },
  {
    icon: CircleDollarSign,
    title: "Financeiro Pessoal",
    text: "Controle seus gastos e saiba exatamente para onde vai seu dinheiro.",
  },
  {
    icon: UsersRound,
    title: "Eventos & Amigos",
    text: "Crie eventos, convide amigos e acompanhe tudo junto.",
  },
  {
    icon: SquareCheckBig,
    title: "Tarefas & Metas",
    text: "Defina tarefas, metas e acompanhe seu progresso.",
  },
  {
    icon: NotebookText,
    title: "Notas & Planejamento",
    text: "Anote ideias, planos e mantenha tudo organizado.",
  },
];

export const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    subtitle: "Para começar a organizar sua vida",
    button: "Começar agora",
    featured: false,
    items: ["Agenda e lembretes", "Tarefas básicas", "Controle financeiro básico", "Até 2 eventos ativos"],
  },
  {
    name: "Premium",
    price: "R$ 19,90",
    period: "/mês",
    subtitle: "Para quem quer mais produtividade",
    button: "Experimentar 7 dias grátis",
    featured: true,
    items: ["Tudo do plano Gratuito", "Eventos ilimitados", "Relatórios financeiros", "Notas e planejamento", "Prioridade no suporte"],
  },
  {
    name: "Vitalício",
    price: "R$ 299,90",
    period: "",
    subtitle: "Acesso para sempre. Pague uma vez e use para sempre",
    button: "Quero acesso vitalício",
    featured: false,
    items: ["Tudo do plano Premium", "Acesso vitalício", "Novas funcionalidades", "Suporte prioritário"],
  },
];

export const testimonials = [
  {
    quote: "O GS Planner mudou completamente a forma como me organizo. Hoje tenho mais tempo e mais controle da minha vida!",
    name: "Manuela Santos",
    role: "Usuária Premium",
    photo: "MS",
  },
  {
    quote: "Tudo para organizar minhas finanças, tarefas e eventos da empresa. Simples, completo e muito eficiente!",
    name: "Lucas Martins",
    role: "Empreendedor",
    photo: "LM",
  },
  {
    quote: "Finalmente encontrei um app que junta tudo que eu precisava em um só lugar. Interface linda e fácil de usar!",
    name: "Larissa Oliveira",
    role: "Estudante",
    photo: "LO",
  },
];
