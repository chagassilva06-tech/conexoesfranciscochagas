import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Activity,
  Trophy,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";
import profileImg from "@/assets/profile-francisco.png";
import logoImg from "@/assets/logo-francisco.png";

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
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  subtitle: string;
  preview: string;
  href: string;
  icon: typeof Linkedin;
  accent?: string;
};

const links: LinkItem[] = [
  {
    label: "Portfólio Web",
    subtitle: "Projetos de desenvolvimento e UI",
    preview: "Veja meus projetos web, estudos de caso e tecnologias que utilizo no dia a dia.",
    href: "#portfolio-web",
    icon: Globe,
  },
  {
    label: "Portfólio Runner",
    subtitle: "Provas, treinos e conquistas",
    preview: "Acompanhe meu projeto pessoal como corredor: resultados, rotinas e bastidores.",
    href: "#portfolio-runner",
    icon: Trophy,
  },
  {
    label: "WhatsApp",
    subtitle: "Fale comigo agora",
    preview: "Resposta rápida para projetos, parcerias e dúvidas. Chamada direta no WhatsApp.",
    href: "https://wa.me/5500000000000",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    subtitle: "Trajetória profissional",
    preview: "Experiência, recomendações e networking — conecte-se comigo no LinkedIn.",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    subtitle: "Bastidores e rotina",
    preview: "Posts e stories sobre rotina, criatividade e processo. Bem-vindo ao feed.",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    label: "YouTube",
    subtitle: "Vídeos e tutoriais",
    preview: "Vlogs de provas, conteúdos sobre desenvolvimento e treinos detalhados.",
    href: "https://youtube.com",
    icon: Youtube,
  },
  {
    label: "Strava",
    subtitle: "Atividades e métricas",
    preview: "Meus treinos de corrida em tempo real: pace, distância, elevação e rotas.",
    href: "https://strava.com",
    icon: Activity,
  },
  {
    label: "Facebook",
    subtitle: "Comunidade e atualizações",
    preview: "Atualizações ocasionais, eventos e conexões com a rede mais ampla.",
    href: "https://facebook.com",
    icon: Facebook,
  },
];

function LinksPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-neon)", opacity: 0.18 }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-xl sm:max-w-4xl px-5 pb-16 pt-12 sm:pt-16">
        {/* Header */}
        <header className="flex flex-col items-center text-center animate-float-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl" style={{ background: "var(--neon)", opacity: 0.35 }} aria-hidden />
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full p-[3px] ring-neon animate-pulse-neon">
              <img
                src={profileImg}
                alt="Foto de perfil de Francisco Chagas"
                width={256}
                height={256}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span
              className="absolute bottom-1 right-1 grid h-7 w-7 place-items-center rounded-full border-2 border-background"
              style={{ background: "var(--neon)" }}
              aria-label="Disponível"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
          </div>

          <h1 className="mt-5">
            <span className="sr-only">Francisco Chagas</span>
            <img
              src={logoImg}
              alt="Logotipo Francisco Chagas"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_18px_hsl(var(--neon)/0.45)]"
            />
          </h1>
          <p className="mt-2 max-w-sm text-sm sm:text-base text-muted-foreground">
            Desenvolvedor & Runner — projetos, redes e contato em um único hub.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <MapPin className="h-3.5 w-3.5" style={{ color: "var(--neon)" }} />
            Brasil · Online
          </div>
        </header>

        {/* Links */}
        <section
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          aria-label="Lista de links"
        >
          {links.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hovered === i;
            const external = item.href.startsWith("http");
            return (
              <div
                key={item.label}
                className="animate-float-up"
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                <a
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered((h) => (h === i ? null : h))}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card/70 px-4 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {/* hover gradient sweep */}
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, oklch(0.82 0.22 145 / 0.12) 50%, transparent 70%)",
                    }}
                    aria-hidden
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background/60 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent"
                      style={
                        isHovered
                          ? { background: "var(--gradient-neon)", color: "var(--primary-foreground)" }
                          : { color: "var(--neon)" }
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-base sm:text-lg font-semibold text-foreground">
                        {item.label}
                      </h2>
                      <p className="truncate text-xs sm:text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>

                    <span
                      className="shrink-0 text-xs font-medium uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: "var(--neon)" }}
                      aria-hidden
                    >
                      Abrir →
                    </span>
                  </div>

                  {/* Preview tooltip */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isHovered ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-lg border border-border bg-background/70 px-3 py-2 text-xs sm:text-sm text-muted-foreground">
                        {item.preview}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </section>

        {/* About / Project summary */}
        <section
          className="mt-12 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur animate-float-up"
          style={{ animationDelay: "700ms" }}
        >
          <h3 className="text-lg font-semibold text-foreground">
            Sobre este <span className="text-neon">hub</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Página de links personalizada para centralizar contatos, redes e projetos com
            identidade visual coerente — leve, responsiva e fácil de manter.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            {["HTML", "CSS", "JavaScript", "UX/UI"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-background/50 px-2 py-1 text-center text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} — Todos os direitos reservados{" "}
            <span className="text-neon font-medium">Francisco Chagas</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
