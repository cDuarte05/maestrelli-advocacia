import { Reveal } from "@/components/Reveal";

const testimonials = [
  "Desde o primeiro atendimento me senti acolhida e segura para tomar uma decisão importante.",
  "A Dra. Marcela explicou cada etapa com muita clareza. Fez toda a diferença.",
  "Um atendimento profissional, humano e extremamente cuidadoso.",
];

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <h2
            id="depoimentos-titulo"
            className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]"
          >
            Experiências que representam o nosso propósito.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((quote, i) => (
            <Reveal
              as="li"
              key={quote}
              delay={i * 100}
              className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-soft"
            >
              <span className="font-serif text-4xl leading-none text-champagne" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-4 text-[1.08rem] leading-relaxed">{quote}</blockquote>
              <footer className="mt-8 border-t border-border pt-4">
                <span className="eyebrow">Cliente demonstrativo</span>
              </footer>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-[0.75rem] text-muted-foreground">
          Depoimentos fictícios utilizados exclusivamente para demonstração do projeto.
        </p>
      </div>
    </section>
  );
}
