import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="relative overflow-hidden bg-charcoal">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 size-96 rounded-full bg-champagne/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl text-charcoal-foreground">
          <span className="eyebrow text-champagne">Próximo passo</span>
          <h2
            id="cta-titulo"
            className="display mt-6 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem]"
          >
            Seu caso merece atenção individualizada.
          </h2>
          <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-charcoal-foreground/70">
            Fale com a Dra. Marcela e entenda quais podem ser os próximos passos para a sua situação.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-champagne px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase text-charcoal transition-colors hover:bg-champagne-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Agendar uma consulta
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-charcoal-foreground/25 px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase text-charcoal-foreground transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <MessageCircle className="size-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
