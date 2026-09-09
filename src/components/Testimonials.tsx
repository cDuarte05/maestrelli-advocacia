import { Reveal } from "@/components/Reveal";

const commitments = [
  {
    title: "Sigilo Absoluto",
    text: "Garantia de confidencialidade e discrição total em todas as etapas do seu atendimento.",
  },
  {
    title: "Resolução Humanizada",
    text: "Foco em minimizar o desgaste emocional e buscar os caminhos menos traumáticos para a família.",
  },
  {
    title: "Transparência Real",
    text: "Comunicação clara sobre os riscos, prazos e todas as possibilidades legais do seu caso.",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="compromisso-titulo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Nosso Compromisso</p>
          <h2
            id="compromisso-titulo"
            className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]"
          >
            Princípios que guiam cada atendimento.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {commitments.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 100}
              className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-soft"
            >
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-[1.08rem] leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

