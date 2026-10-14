import Hero from "@/components/Hero";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import { Manifesto, NumerosHome, ProjetosHorizontal, StacksMarquee } from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <StacksMarquee />
      <NumerosHome />
      <ProjetosHorizontal />
      <Depoimentos />
      <CtaFinal proxima={{ href: "/sobre/", label: "Conhecer mais sobre mim" }} />
    </>
  );
}
