"use client";

import { useState } from "react";
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

const assuntos = ["Vaga de emprego", "Projeto freelance", "Parceria", "Só dizer oi"];

export function Canais() {
  return (
    <ul className={styles.canais}>
      {canais.map((c) => (
        <li key={c.nome} data-reveal>
          <a href={c.href} data-spot {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            <span className={styles.icone}><Icon name={c.icone} size={22} /></span>
            <span>
              <span className={styles.nome}>{c.nome}</span>
              <span className={styles.valor}>{c.valor}</span>
            </span>
            {c.externo && <span className="sr-only">(abre em nova aba)</span>}
            <Icon name="arrowRight" size={20} className={styles.seta} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Monta a mensagem e abre o WhatsApp ou o e-mail já preenchidos (sem backend). */
export function MensagemRapida() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState(assuntos[0]);
  const [texto, setTexto] = useState("");

  const corpo = `Olá, Gabriel! Meu nome é ${nome || "[seu nome]"}.\nAssunto: ${assunto}\n\n${texto || "[sua mensagem]"}`;
  const wa = `https://wa.me/${perfil.whatsapp.numero}?text=${encodeURIComponent(corpo)}`;
  const mail = `mailto:${perfil.email}?subject=${encodeURIComponent(`${assunto} — via portfólio`)}&body=${encodeURIComponent(corpo)}`;
  const pronto = nome.trim().length > 1 && texto.trim().length > 3;

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} data-reveal aria-labelledby="msg-titulo">
      <h2 id="msg-titulo">Mande uma mensagem pronta</h2>
      <p className={styles.formLead}>Preencha e escolha por onde enviar. Nada fica salvo aqui.</p>

      <label className={styles.campo}>
        <span>Seu nome</span>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" required />
      </label>

      <fieldset className={styles.assuntos}>
        <legend>Assunto</legend>
        {assuntos.map((a) => (
          <label key={a} className={assunto === a ? styles.ativo : ""}>
            <input type="radio" name="assunto" value={a} checked={assunto === a} onChange={() => setAssunto(a)} />
            {a}
          </label>
        ))}
      </fieldset>

      <label className={styles.campo}>
        <span>Mensagem</span>
        <textarea rows={5} value={texto} onChange={(e) => setTexto(e.target.value)} required />
      </label>

      <div className={styles.enviar}>
        <a className={`btn btn-primary ${pronto ? "" : styles.desab}`} href={pronto ? wa : undefined}
          aria-disabled={!pronto} target="_blank" rel="noopener noreferrer" data-magnetic>
          <Icon name="whatsapp" /> Enviar pelo WhatsApp <span className="sr-only">(abre em nova aba)</span>
        </a>
        <a className={`btn btn-ghost ${pronto ? "" : styles.desab}`} href={pronto ? mail : undefined}
          aria-disabled={!pronto} data-magnetic>
          <Icon name="mail" /> Enviar por e-mail
        </a>
      </div>
      {!pronto && <p className={styles.dica}>Preencha nome e mensagem para liberar o envio.</p>}
    </form>
  );
}

export function CvCard() {
  if (!perfil.curriculo) return null;
  return (
    <a href={perfil.curriculo} download className={styles.cvCard} data-reveal data-spot>
      <span className={styles.cvDoc} aria-hidden>
        <span>PDF</span>
      </span>
      <span className={styles.cvTexto}>
        <strong>Currículo — Gabriel Correia Reis</strong>
        <span>Experiência, formação e habilidades em uma página</span>
      </span>
      <span className={styles.cvBtn}><Icon name="download" size={20} /> Baixar</span>
    </a>
  );
}
