import { Mail, MessageCircle, Building2 } from "lucide-react";

// Ícone próprio do Instagram para evitar erro de importação no lucide-react.
// Assim o projeto não quebra caso a biblioteca não tenha esse export.
function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const productLinks = [
  ["Funcionalidades", "#funcionalidades"],
  ["Recursos", "#recursos"],
  ["Planos", "#planos"],
  ["Contato", "#contato"],
];

export default function Footer() {
  const gsyntraSite = "https://gsyntra.com.br";
  const instagram = "https://www.instagram.com/gsyntra";
  const email = "contato@gsyntra.com.br";

  return (
    <footer id="contato" className="border-t border-white/10 bg-[#02030A] px-5 py-10 lg:px-8">
      <div className="mx-auto grid compact-container max-w-[1280px] gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a
            href={gsyntraSite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
            title="Conheça a GSYNTRA Tecnologia"
          >
            <span className="grid h-9 w-12 place-items-center rounded-lg border border-purple-400/70 bg-black/35 text-lg font-black italic text-white">
              GS
            </span>
            <span className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-lg font-black tracking-[0.18em] text-transparent">
              PLANNER
            </span>
          </a>

          <p className="mt-4 text-sm text-white/45">Seu dia, suas metas, seu futuro.</p>

          <p className="mt-2 text-sm text-white/45">
            Desenvolvido por{" "}
            <a
              href={gsyntraSite}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-purple-300 transition hover:text-white"
            >
              GSYNTRA Tecnologia
            </a>
          </p>

          <p className="mt-2 text-sm text-white/45">© 2026 GS Planner. Todos os direitos reservados.</p>
        </div>

        <div>
          <h3 className="font-black text-white/78">Produto</h3>
          <div className="mt-4 flex flex-col gap-2">
            {productLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-white/45 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white/78">GSYNTRA</h3>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={gsyntraSite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
            >
              <Building2 size={16} />
              Conheça a empresa
            </a>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
            >
              <InstagramIcon size={16} />
              Instagram GSYNTRA
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
            >
              <Mail size={16} />
              {email}
            </a>
          </div>

          <div className="mt-5 flex gap-4">
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:text-white"
              title="Instagram da GSYNTRA"
            >
              <InstagramIcon size={18} />
            </a>

            <a
              href={`mailto:${email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:text-white"
              title="Enviar e-mail para a GSYNTRA"
            >
              <Mail size={18} />
            </a>

            <a
              href={gsyntraSite}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:text-white"
              title="Site da GSYNTRA"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
