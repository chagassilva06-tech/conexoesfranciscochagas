import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile-francisco.webp";
import { LinksPage } from "@/components/LinksPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas — Hub de Links" },
      {
        name: "description",
        content:
          "Página de links de Francisco Chagas: portfólio web, projetos runner, redes sociais e contato direto via WhatsApp.",
      },
      { property: "og:title", content: "Francisco Chagas — Hub de Links" },
      {
        property: "og:description",
        content: "Todos os meus canais e projetos em um único lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", as: "image", href: profileImg, fetchpriority: "high" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: LinksPage,
});
