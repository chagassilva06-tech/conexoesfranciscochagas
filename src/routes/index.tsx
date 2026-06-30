import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Youtube,
  Globe,
  Activity,
  Trophy,
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
    href: "https://portfoliochagas.lovable.app/",
    icon: Globe,
  },
  {
    label: "Portfólio Runner",
    subtitle: "Provas, treinos e conquistas",
    preview: "Acompanhe meu projeto pessoal como corredor: resultados, rotinas e bastidores.",
    href: "https://runnerfrancisco.lovable.app/",
    icon: Trophy,
  },
  {
    label: "YouTube",
    subtitle: "Vídeos e conteúdos",
    preview: "Acompanhe meus vídeos, vlogs de provas e conteúdos no canal do YouTube.",
    href: "https://www.youtube.com/@FrankChagass",
    icon: Youtube,
  },
  {
    label: "LinkedIn",
    subtitle: "Trajetória profissional",
    preview: "Experiência, recomendações e networking — conecte-se comigo no LinkedIn.",
    href: "https://www.linkedin.com/in/francisco-das-chagas-silva-b880601b3/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    subtitle: "Bastidores e rotina",
    preview: "Posts e stories sobre rotina, criatividade e processo. Bem-vindo ao feed.",
    href: "https://www.instagram.com/silva.franciscochagas/",
    icon: Instagram,
  },
  {
    label: "GitHub",
    subtitle: "Repositórios e código",
    preview: "Meus projetos open source, experimentos e códigos de estudo no GitHub.",
    href: "https://github.com/chagassilva06-tech",
    icon: Github,
  },
  {
    label: "Strava",
    subtitle: "Atividades e métricas",
    preview: "Meus treinos de corrida em tempo real: pace, distância, elevação e rotas.",
    href: "https://www.strava.com/athletes/44632513",
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

  const openExternalLink = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("http")) return;
      event.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
    },
    [],
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-neon)", opacity: 0.18 }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-xl sm:max-w-4xl px-4 sm:px-6 pb-12 sm:pb-16 pt-8 sm:pt-16">
        {/* Header */}
        <header className="flex flex-col items-center text-center animate-float-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl" style={{ background: "var(--neon)", opacity: 0.35 }} aria-hidden />
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full p-[3px] ring-neon animate-pulse-neon">
              <img
                src={profileImg}
                alt="Foto de perfil de Francisco Chagas"
                width={256}
                height={256}
                loading="eager"
                fetchPriority="high"
                decoding="async"
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

          <h1 className="mt-6">
            <span className="sr-only">Francisco Chagas</span>
            <a
              href="#top"
              className="group relative inline-flex items-center justify-center rounded-2xl p-[2px] transition-all duration-500 hover:scale-[1.04]"
              aria-label="Francisco Chagas"
            >
              {/* glow halo */}
              <span
                className="pointer-events-none absolute -inset-3 rounded-3xl opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-90 group-hover:-inset-5"
                style={{ background: "var(--gradient-neon)" }}
                aria-hidden
              />
              {/* gradient border */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-neon)" }}
                aria-hidden
              />
              {/* sheen sweep */}
              <span
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                aria-hidden
              >
                <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              </span>
              <img
                src={logoImg}
                alt="Logotipo Francisco Chagas"
                loading="lazy"
                decoding="async"
                className="relative h-14 sm:h-20 md:h-24 w-auto max-w-[80vw] rounded-2xl bg-card/80 px-3 sm:px-5 py-2 sm:py-3 object-contain backdrop-blur-md shadow-neon transition-all duration-500 group-hover:shadow-[0_0_60px_-5px_var(--neon)]"
              />
            </a>
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
          className="mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
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
                  onClick={(event) => openExternalLink(event, item.href)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered((h) => (h === i ? null : h))}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card/70 px-3 sm:px-4 py-3 sm:py-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div
                      className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl border border-border bg-background/60 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent"
                      style={
                        isHovered
                          ? { background: "var(--gradient-neon)", color: "var(--primary-foreground)" }
                          : { color: "var(--neon)" }
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-sm sm:text-base md:text-lg font-semibold text-foreground">
                        {item.label}
                      </h2>
                      <p className="truncate text-xs sm:text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>

                    <span
                      className="hidden sm:inline shrink-0 text-xs font-medium uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
