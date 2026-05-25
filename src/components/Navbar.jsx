// Navbar fixa com navegação por âncoras. No mobile, reduz links para manter o layout limpo.
import { Menu } from 'lucide-react';

const links = ['Início', 'Recursos', 'Planos', 'Para Empresas', 'Blog', 'Contato'];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#inicio" aria-label="GS Planner início">
        <span className="brand-mark">GS</span>
        <span className="brand-text">PLANNER</span>
      </a>

      <nav className="nav-links" aria-label="Navegação principal">
        {links.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="btn ghost" href="#login">Entrar</a>
        <a className="btn solid small" href="#planos">Criar conta</a>
        <button className="mobile-menu" aria-label="Abrir menu"><Menu size={20} /></button>
      </div>
    </header>
  );
}
