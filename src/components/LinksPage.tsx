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
  
  QrCode,
  X,
  Share2,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import profileImg from "@/assets/profile-francisco.webp";
import logoImg from "@/assets/logo-francisco.webp";

const SHARE_URL = "https://conexoesfranciscochagas.lovable.app/";

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

export function LinksPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [qrOpen, setQrOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Francisco Chagas — Hub de Links", url: SHARE_URL });
      } catch {
        // ignore
      }
    } else {
      handleCopy();
    }
  }, [handleCopy]);

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
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-neon)", opacity: 0.18 }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-xl sm:max-w-4xl px-4 sm:px-6 pb-12 sm:pb-16 pt-8 sm:pt-16">
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
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <h1 className="m-0">
              <span className="sr-only">Francisco Chagas</span>
              <a
                href="#top"
                className="group relative inline-flex items-center justify-center rounded-2xl p-[2px] transition-all duration-500 hover:scale-[1.04]"
                aria-label="Francisco Chagas"
              >
                <span
                  className="pointer-events-none absolute -inset-3 rounded-3xl opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-90 group-hover:-inset-5"
                  style={{ background: "var(--gradient-neon)" }}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-neon)" }}
                  aria-hidden
                />
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
                  className="relative h-14 sm:h-20 md:h-24 w-auto max-w-[70vw] rounded-2xl bg-card/80 px-3 sm:px-5 py-2 sm:py-3 object-contain backdrop-blur-md shadow-neon transition-all duration-500 group-hover:shadow-[0_0_60px_-5px_var(--neon)]"
                />
              </a>
            </h1>
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              aria-label="Mostrar QR Code para compartilhar esta página"
              title="Compartilhar via QR Code"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl border border-border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "var(--gradient-neon)", opacity: 0.15 }}
                aria-hidden
              />
              <QrCode className="relative h-6 w-6 sm:h-7 sm:w-7" style={{ color: "var(--neon)" }} strokeWidth={2.2} />
            </button>
          </div>
          <p className="mt-2 max-w-sm text-sm sm:text-base text-muted-foreground">
            Desenvolvedor & Runner — projetos, redes e contato em um único hub.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <MapPin className="h-3.5 w-3.5" style={{ color: "var(--neon)" }} />
            Brasil · Online
          </div>
        </header>

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

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} — Todos os direitos reservados{" "}
            <span className="text-neon font-medium">Francisco Chagas</span>
          </p>
        </footer>
      </div>

      {qrOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="QR Code para compartilhar"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in-0"
          onClick={() => setQrOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" aria-hidden />
          <div
            className="relative w-full max-w-sm rounded-3xl border border-border bg-card/90 p-6 shadow-neon backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrOpen(false)}
              aria-label="Fechar"
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                <QrCode className="h-3.5 w-3.5" style={{ color: "var(--neon)" }} />
                Compartilhar página
              </div>
              <h2 className="mt-3 text-lg font-semibold text-foreground">
                Escaneie o QR Code
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Aponte a câmera do celular para acessar o hub.
              </p>

              <div className="mt-5 rounded-2xl p-[3px]" style={{ background: "var(--gradient-neon)" }}>
                <div className="rounded-xl bg-white p-4">
                  <QRCodeSVG
                    value={SHARE_URL}
                    size={220}
                    level="M"
                    marginSize={0}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                  />
                </div>
              </div>

              <div className="mt-4 w-full break-all rounded-lg border border-border bg-background/70 px-3 py-2 text-xs text-muted-foreground">
                {SHARE_URL}
              </div>

              <div className="mt-4 grid w-full grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-xl border border-border bg-background/70 px-3 py-2 text-xs sm:text-sm font-medium text-foreground transition hover:border-transparent hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {copied ? "Copiado ✓" : "Copiar link"}
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
