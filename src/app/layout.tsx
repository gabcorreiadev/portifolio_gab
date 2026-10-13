import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { perfil } from "@/data/perfil";
import "@/styles/globals.scss";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

const titulo = `${perfil.nome} — Desenvolvedor Front-End & UX/UI`;
const descricao =
  "Portfólio de Gabriel Correia Reis, Desenvolvedor Front-End com base em UX/UI: React, Next.js, Angular, TypeScript, acessibilidade (WCAG) e AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(perfil.site),
  title: titulo,
  description: descricao,
  authors: [{ name: perfil.nome, url: perfil.site }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: perfil.site,
    siteName: perfil.nome,
    title: titulo,
    description: descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: perfil.nome }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao, images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f0c" },
  ],
};

// Aplica o tema antes da primeira pintura (sem flash) e marca que o JS está ativo.
const temaInicial = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('tema');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  jobTitle: perfil.cargo,
  url: perfil.site,
  email: `mailto:${perfil.email}`,
  image: `${perfil.site}${perfil.foto}`,
  sameAs: [perfil.linkedin, perfil.github, perfil.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
        <link rel="preload" as="image" href={perfil.foto} type="image/webp" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
