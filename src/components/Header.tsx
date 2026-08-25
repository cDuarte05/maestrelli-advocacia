import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 md:h-24 lg:px-10">
        <a href="#inicio" className="group leading-none">
          <span className="block font-serif text-xl tracking-tight md:text-[1.4rem]">
            {site.name}
          </span>
          <span className="eyebrow mt-1 block text-[0.6rem] transition-colors group-hover:text-champagne">
            {site.role}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.82rem] tracking-wide text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-sm bg-charcoal px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-charcoal-foreground transition-colors hover:bg-charcoal/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-block"
          >
            Agendar consulta
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav aria-label="Navegação móvel" className="mx-auto max-w-[1240px] px-6 py-6">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-serif text-2xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-sm bg-charcoal px-6 py-4 text-center text-[0.75rem] tracking-[0.16em] uppercase text-charcoal-foreground"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
