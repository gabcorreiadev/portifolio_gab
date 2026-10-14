import type { Metadata } from "next";
import Stacks from "@/components/Stacks";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import { AlemDoCodigo, ComoTrabalho, Resumo, SobreHeader, Versiculo } from "@/components/Sobre";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é Gabriel Correia Reis: Desenvolvedor Front-End com base em UX/UI, stacks, soft skills e o que ele faz além do código.",
  alternates: { canonical: "/sobre/" },
};

export default function SobrePage() {
  return (
    <>
      <SobreHeader />
      <Resumo />
      <ComoTrabalho />
      <Stacks />
      <AlemDoCodigo />
      <Versiculo />
      <Depoimentos />
      <CtaFinal proxima={{ href: "/trajetoria/", label: "Ver minha trajetória" }} />
    </>
  );
}
