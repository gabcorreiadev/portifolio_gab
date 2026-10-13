import { grupos } from "@/data/stacks";
import Icon from "./Icon";
import styles from "./Stacks.module.scss";

export default function Stacks() {
  return (
    <section id="stacks" className={`section ${styles.secao}`} aria-labelledby="stacks-titulo">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Stacks</p>
          <h2 id="stacks-titulo">Ferramentas do dia a dia</h2>
          <p>Do protótipo no Figma ao deploy na AWS, com acessibilidade em todo o caminho.</p>
        </div>

        <div className={styles.grupos}>
          {grupos.map((g) => (
            <div key={g.titulo} className={styles.grupo} data-reveal>
              <h3><code>{"// "}</code>{g.titulo}</h3>
              <ul>
                {g.itens.map((s) => (
                  <li key={s.id} className={styles.item} data-reveal>
                    <Icon name={s.id} size={28} brandColor />
                    <span>{s.nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
