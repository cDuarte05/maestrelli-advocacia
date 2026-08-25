import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-marcela.jpg";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-[1240px] items-end gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-24">
        <div className="fade-up max-w-xl pt-8 lg:pt-20">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            Advocacia • São Paulo
          </p>
          <h1 className="display mt-8 text-[2.6rem] sm:text-[3.4rem] lg:text-[4.1rem]">
            Decisões importantes merecem orientação jurídica estratégica.
          </h1>
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            Atuação personalizada em Direito de Família e Sucessões, com clareza, estratégia e
            atenção a cada caso.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-charcoal px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase text-charcoal-foreground transition-colors hover:bg-charcoal/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Agendar uma consulta
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-charcoal/25 px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase transition-colors hover:border-charcoal hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <MessageCircle className="size-4" />
              Falar pelo WhatsApp
            </a>
          </div>

          <p className="mt-10 text-[0.78rem] tracking-wide text-muted-foreground">
            Atendimento presencial e online • São Paulo e todo o Brasil
          </p>
        </div>

        <div className="fade-up relative">
          <div className="absolute -inset-x-6 top-16 bottom-10 -z-10 bg-beige lg:-inset-x-10" />
          <img
            src={heroImage}
            alt="Marcela Maestrelli, advogada especializada em Direito de Família e Sucessões"
            width={1200}
            height={1600}
            decoding="async"
            className="aspect-4/5 w-full rounded-sm object-cover shadow-soft"
          />
          <div className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
            <span className="font-serif text-lg">Marcela Maestrelli</span>
            <span className="eyebrow">Direito de Família e Sucessões</span>
          </div>
        </div>
      </div>
    </section>
  );
}
