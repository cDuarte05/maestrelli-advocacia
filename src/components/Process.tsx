import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "Conte sua situação pelo WhatsApp ou formulário.",
  },
  {
    number: "02",
    title: "Análise do caso",
    text: "Compreensão do contexto e identificação dos principais pontos jurídicos.",
  },
  {
    number: "03",
    title: "Orientação personalizada",
    text: "Direcionamento jurídico e próximos passos.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]">
            Do primeiro contato à orientação jurídica.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px border-t border-border md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 110}
              className="border-b border-border py-10 md:border-b-0 md:border-l md:first:border-l-0 md:px-8 md:first:pl-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-[2.6rem] leading-none text-champagne">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-[1.5rem]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[0.92rem] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 border-b border-charcoal/30 pb-1 text-[0.8rem] tracking-[0.16em] uppercase transition-colors hover:border-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Agendar consulta
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
