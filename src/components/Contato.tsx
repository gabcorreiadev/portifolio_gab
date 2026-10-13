import { perfil, whatsappUrl } from "@/data/perfil";
import Icon from "./Icon";
import styles from "./Contato.module.scss";

const canais = [
  { icone: "whatsapp", nome: "WhatsApp", valor: perfil.whatsapp.exibicao, href: whatsappUrl(), externo: true },
  { icone: "mail", nome: "E-mail", valor: perfil.email, href: `mailto:${perfil.email}`, externo: false },
  { icone: "linkedin", nome: "LinkedIn", valor: "gabriel-correia-reis", href: perfil.linkedin, externo: true },
  { icone: "github", nome: "GitHub", valor: "gabcorreiadev", href: perfil.github, externo: true },
  { icone: "instagram", nome: "Instagram", valor: "@gabcorreia", href: perfil.instagram, externo: true },
];

export default function Contato() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-titulo">
      <div className={`container ${styles.box}`} data-reveal>
        <div className={styles.glow} aria-hidden />
        <div className={styles.chamada}>
          <p className="eyebrow">Contato</p>
          <h2 id="contato-titulo">Tem um projeto ou uma vaga em mente? Vamos conversar.</h2>
          <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /> Chamar no WhatsApp
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
        <ul className={styles.canais}>
          {canais.map((c) => (
            <li key={c.nome}>
              <a href={c.href} {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className={styles.icone}><Icon name={c.icone} size={20} /></span>
                <span>
                  <span className={styles.nome}>{c.nome}</span>
                  <span className={styles.valor}>{c.valor}</span>
                </span>
                {c.externo && <span className="sr-only">(abre em nova aba)</span>}
                <Icon name="arrowRight" size={18} className={styles.seta} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
