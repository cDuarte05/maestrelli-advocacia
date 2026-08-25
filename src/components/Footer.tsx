import { Instagram } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-beige/60">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl">{site.name} — Advocacia</p>
            <p className="mt-2 max-w-xs text-[0.85rem] text-muted-foreground">{site.tagline}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.85rem]">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/75 hover:text-champagne">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-[0.85rem]">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-champagne"
            >
              <Instagram className="size-4" strokeWidth={1.5} />
              {site.instagram}
            </a>
            <p className="mt-3 text-muted-foreground">{site.phoneDisplay}</p>
            <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-champagne">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="eyebrow">{site.oab} — dado fictício</p>
          <p className="mt-4 max-w-3xl text-[0.75rem] leading-relaxed text-muted-foreground">
            Este site é um projeto demonstrativo desenvolvido para apresentação de portfólio.
            Marcela Maestrelli é uma personagem fictícia e as informações, contatos e depoimentos
            apresentados são ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
