export const site = {
  name: "Marcela Maestrelli",
  role: "Advocacia",
  tagline: "Estratégia jurídica para decisões que importam.",
  oab: "OAB/SP 000.000",
  phoneDisplay: "(11) 99999-0000",
  phoneRaw: "5511999990000",
  email: "contato@marcelamaestrelli.adv.br",
  instagram: "@marcelamaestrelli.adv",
  instagramUrl: "https://instagram.com/marcelamaestrelli.adv",
  city: "São Paulo — SP",
};

export const whatsappMessage =
  "Olá, Dra. Marcela. Gostaria de obter informações sobre uma consulta jurídica.";

export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
