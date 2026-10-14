import type { Metadata } from "next";
import { Canais, CvCard, MensagemRapida } from "@/components/Contato";
import styles from "@/components/Contato.module.scss";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com Gabriel Correia Reis por WhatsApp, e-mail, LinkedIn, GitHub ou Instagram. Baixe também o currículo em PDF.",
  alternates: { canonical: "/contato/" },
};

export default function ContatoPage() {
  return (
    <>
      <header className="page-header">
        <div className="aurora" aria-hidden><span /><span /><span /></div>
        <div className="container">
          <p className="eyebrow" data-reveal>Contato</p>
          <h1 data-split>Vamos conversar<span style={{ color: "var(--primary)" }}>.</span></h1>
          <p className="lead" data-reveal>Tem um projeto ou uma vaga em mente? Escolha o canal que preferir.</p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 0 }} aria-label="Canais de contato">
        <div className={`container ${styles.layout}`}>
          <div className={styles.coluna}>
            <Canais />
            <CvCard />
          </div>
          <MensagemRapida />
        </div>
      </section>
    </>
  );
}
