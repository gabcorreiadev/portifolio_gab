import Header, { type LinkNav } from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Stacks from "@/components/Stacks";
import Trajetoria from "@/components/Trajetoria";
import Projetos from "@/components/Projetos";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Motion from "@/components/Motion";
import { depoimentosPublicados } from "@/data/depoimentos";

const links: LinkNav[] = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#stacks", label: "Stacks" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#projetos", label: "Projetos" },
  ...(depoimentosPublicados.length ? [{ href: "#depoimentos", label: "Depoimentos" }] : []),
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <>
      <Loader />
      <Header links={links} />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Stacks />
        <Trajetoria />
        <Projetos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
