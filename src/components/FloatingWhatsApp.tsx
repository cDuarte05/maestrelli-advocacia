import { site, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#5A8C7A] text-white shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className="absolute inset-0 rounded-full bg-[#5A8C7A] opacity-60 animate-slow-ping" aria-hidden="true" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="relative z-10 size-8"
        aria-hidden="true"
      >
        <path d="M16 2.9C8.8 2.9 2.9 8.8 2.9 16c0 2.4.7 4.7 1.9 6.7L2.8 28l5.5-1.8c1.9 1.1 4.1 1.8 6.4 1.8 7.2 0 13.1-5.8 13.1-13.1S23.2 2.9 16 2.9zm0 23.6c-2 0-3.8-.5-5.4-1.5l-.4-.2-3.6 1.2 1.2-3.6-.2-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.8 4.7-10.6 10.6-10.6S26.5 10.2 26.5 16c0 5.8-4.8 10.5-10.6 10.5zm5.8-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.3-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.8-1.4-1.8-1.5-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.2-.6-1.5-.9-2.1-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.1 3 .2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.6.7.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.9-1.3.2-.7.2-1.2.1-1.4z" />
      </svg>
    </a>
  );
}
