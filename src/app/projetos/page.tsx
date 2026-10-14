import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import GithubStats from "@/components/GithubStats";
import Icon from "@/components/Icon";
import { ComoFoiFeito, GradeProjetos, ProjetosDestaque } from "@/components/Projetos";
import { perfil } from "@/data/perfil";
import { projetos } from "@/data/projetos";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos publicados por Gabriel Correia Reis: Box na Veia, Tracker de Estreias, Anil Jeans, New Burger e outros.",
  alternates: { canonical: "/projetos/" },
};

export default function ProjetosPage() {
  return (
    <>
      <header className="page-header">
        <div className="aurora" aria-hidden><span /><span /><span /></div>
        <div className="container">
          <p className="eyebrow" data-reveal>Projetos</p>
          <h1 data-split>Do Figma ao deploy</h1>
          <p className="lead" data-reveal>
            {projetos.length} sites publicados: primeiro os destaques, depois todos os outros em cards, com filtro por tecnologia.
          </p>
          <div className="acoes" data-reveal>
            <a className="btn btn-ghost" href={perfil.github} target="_blank" rel="noopener noreferrer" data-magnetic>
              <Icon name="github" /> Ver meu GitHub <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </header>
      <ProjetosDestaque />
      <GradeProjetos />
      <GithubStats />
      <ComoFoiFeito />
      <CtaFinal titulo="Tem um projeto em mente?" proxima={{ href: "/contato/", label: "Ir para contato" }} />
    </>
  );
}
