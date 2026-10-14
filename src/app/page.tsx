import Hero from "@/components/Hero";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import GithubStats from "@/components/GithubStats";
import { Explorar, Manifesto, NumerosHome, ProjetosHorizontal, StacksMarquee } from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <StacksMarquee />
      <NumerosHome />
      <GithubStats />
      <ProjetosHorizontal />
      <Explorar />
      <Depoimentos />
      <CtaFinal proxima={{ href: "/sobre/", label: "Conhecer mais sobre mim" }} />
    </>
  );
}
