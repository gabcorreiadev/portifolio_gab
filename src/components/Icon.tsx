import {
  siAngular,
  siBitbucket,
  siCss,
  siFigma,
  siGit,
  siGithub,
  siGmail,
  siHtml5,
  siHubspot,
  siInstagram,
  siJavascript,
  siJira,
  siNextdotjs,
  siReact,
  siReactivex,
  siSass,
  siTypescript,
  siWhatsapp,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string };

const marcas: Record<string, SimpleIcon> = {
  html: siHtml5,
  css: siCss,
  sass: siSass,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  angular: siAngular,
  rxjs: siReactivex,
  figma: siFigma,
  git: siGit,
  bitbucket: siBitbucket,
  jira: siJira,
  hubspot: siHubspot,
  github: siGithub,
  instagram: siInstagram,
  whatsapp: siWhatsapp,
  gmail: siGmail,
};

/** Ícones de traço (24×24, stroke = currentColor) para o que não é marca. */
const tracos: Record<string, string> = {
  aws: "M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 8.5a4 4 0 0 1-.5 9.5H7Z",
  azuredevops: "M4 7l8-4 8 4v10l-8 4-8-4V7Zm8-4v18M4 7l8 4 8-4",
  wcag: "M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 8l7 1.5L19 8M12 9.5V14m0 0-3 7m3-7 3 7",
  uxui: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 4h18M9 9v12",
  linkedin: "M4 4h16v16H4V4Zm4 6v6m0-8.5v.01M12 16v-3.5a2 2 0 0 1 4 0V16m-4-6v6",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  arrowUp: "M12 19V5m0 0-6 6m6-6 6 6",
  arrowRight: "M5 12h14m0 0-6-6m6 6-6 6",
  external: "M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  code: "M8 8l-4 4 4 4m8-8 4 4-4 4m-6 3 4-14",
  sun: "M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17m10-10 1.4-1.4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  moon: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  download: "M12 4v11m0 0-4-4m4 4 4-4M5 20h14",
  music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  gamepad: "M6 9h4M8 7v4m7-1h.01M18 12h.01M7 5h10a5 5 0 0 1 4.9 6l-.8 4a3 3 0 0 1-5.3 1.3L14 14h-4l-1.8 2.3A3 3 0 0 1 2.9 15l-.8-4A5 5 0 0 1 7 5Z",
  ball: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13 3.8 2.8-1.4 4.4H9.6l-1.4-4.4L12 8Zm0 0V3m3.8 5.8 4.8-1.6m-6.2 6 3 4m-8 0 3-4M3.4 7.2l4.8 1.6",
  belt: "M3 10h18v4H3v-4Zm9 0 -3 9m3-9 3 9M10 10l2 2 2-2",
  plane: "M10.5 13.5 3 11l1.5-1.5 8 1L17 6a2.1 2.1 0 0 1 3 3l-4.5 4.5 1 8L15 23l-2.5-7.5L9 19v3l-1.5 1.5-1-4-4-1L4 17h3l3.5-3.5Z",
  heart: "M12 20s-7.5-4.6-9.3-9.2C1.4 7.4 3.7 4 7.2 4c2 0 3.6 1.1 4.8 2.7C13.2 5.1 14.8 4 16.8 4c3.5 0 5.8 3.4 4.5 6.8C19.5 15.4 12 20 12 20Z",
  briefcase: "M4 8h16v11H4V8Zm5 0V5h6v3M4 13h16",
  cap: "M2 9l10-5 10 5-10 5L2 9Zm4 2v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6",
  quote: "M9 7H5v6h4v-2c0 2-1 4-3 5m13-9h-4v6h4v-2c0 2-1 4-3 5",
};

type Props = { name: string; size?: number; title?: string; className?: string; brandColor?: boolean };

export default function Icon({ name, size = 20, title, className, brandColor = false }: Props) {
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };
  const marca = marcas[name];

  if (marca) {
    // Marcas muito escuras (Next.js, GitHub…) usam currentColor para não sumir no tema escuro.
    const n = parseInt(marca.hex, 16);
    const luz = ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114;
    const cor = brandColor && luz > 60 ? `#${marca.hex}` : "currentColor";
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...a11y}
        fill={cor}>
        <path d={marca.path} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...a11y}
      fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d={tracos[name] ?? tracos.code} />
    </svg>
  );
}
