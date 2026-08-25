import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { PracticeAreas } from "@/components/PracticeAreas";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { Faq, faqs } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Marcela Maestrelli | Advocacia de Família e Sucessões em SP";
const description =
  "Advocacia personalizada em Direito de Família e Sucessões em São Paulo. Atendimento presencial e online, com clareza e estratégia. Projeto demonstrativo.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PracticeAreas />
        <About />
        <Process />
        <Differentials />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
