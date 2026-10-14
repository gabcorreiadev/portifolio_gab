import Link from "next/link";
import { perfil, whatsappUrl } from "@/data/perfil";
import Icon from "./Icon";

type Props = {
  titulo?: string;
  texto?: string;
  /** Link secundário para outra página (ex.: { href: "/projetos/", label: "Ver projetos" }). */
  proxima?: { href: string; label: string };
};

export default function CtaFinal({
  titulo = "Vamos construir algo juntos?",
  texto = "Tem um projeto ou uma vaga em mente? Me chama no WhatsApp ou baixe meu currículo.",
  proxima,
}: Props) {
  return (
    <section className="section cta-final" aria-label="Contato">
      <div className="container">
        <p className="eyebrow" data-reveal>Próximo passo</p>
        <h2 data-split>{titulo}</h2>
        <p data-reveal>{texto}</p>
        <div className="acoes" data-reveal>
          <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-magnetic>
            <Icon name="whatsapp" /> Vamos conversar <span className="sr-only">(abre em nova aba)</span>
          </a>
          {perfil.curriculo && (
            <a className="btn btn-ghost" href={perfil.curriculo} download data-magnetic>
              <Icon name="download" /> Baixar currículo
            </a>
          )}
          {proxima && (
            <Link className="btn btn-ghost" href={proxima.href} data-magnetic>
              {proxima.label} <Icon name="arrowRight" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
