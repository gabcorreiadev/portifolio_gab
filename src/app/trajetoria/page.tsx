import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import Icon from "@/components/Icon";
import { Anos, Formacao, Timeline } from "@/components/Trajetoria";
import { perfil } from "@/data/perfil";

export const metadata: Metadata = {
  title: "Trajetória",
  description: "Experiência profissional e formação de Gabriel Correia Reis: Paynet, Revizia, Be.Aliant, SENAI, Estácio e AWS.",
  alternates: { canonical: "/trajetoria/" },
};

export default function TrajetoriaPage() {
  return (
    <>
      <header className="page-header">
        <div className="aurora" aria-hidden><span /><span /><span /></div>
        <div className="container">
          <p className="eyebrow" data-reveal>Trajetória</p>
          <h1 data-split>Três empresas, sempre entre design e código</h1>
          <p className="lead" data-reveal>De 2023 até hoje: do primeiro curso no SENAI às plataformas de compliance da Be.Aliant.</p>
          {perfil.curriculo && (
            <div className="acoes" data-reveal>
              <a className="btn btn-primary" href={perfil.curriculo} download data-magnetic>
                <Icon name="download" /> Baixar currículo completo
              </a>
            </div>
          )}
        </div>
      </header>
      <Anos />
      <Timeline />
      <Formacao />
      <CtaFinal titulo="Quer o resumo em uma página?" texto="Baixe meu currículo em PDF ou vamos conversar direto." proxima={{ href: "/projetos/", label: "Ver projetos" }} />
    </>
  );
}
