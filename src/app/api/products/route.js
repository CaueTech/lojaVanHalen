import { NextResponse } from "next/server";

const produtos = [
  {
    id: 1,
    title: "Van Halen Signature",
    price: "R$ 7.799",
    image: "/assets/EDVHguitar.jpg",
    info: "A guitarra mais singular e emblemática da história da música! Usada pela lenda Eddie Van Halen durante seu auge. Ponte Floyd Rose e um captador humbucker para um som ainda mais encorpado. É uma guitarra perfeita para os fãs mais assíduos e experientes do Rock!"
  },
  {
    id: 2,
    title: "Eagle Stratocaster (Sunburst)",
    price: "R$ 949",
    image: "/assets/stratocasterEagle.webp",
    info: "Replicando o modelo clássico da Fender Stratocaster, a Eagle STS-002 é uma opção acessível sem perder qualidade. Três captadores, um humbucker na ponte e dois captadores singles, com chave seletora de cinco posições, clássica do modelo Stratocaster. Esse é o modelo ideal para quem está comprando sua primeira guitarra e quer começar com o pé direito."
  },
  {
    id: 3,
    title: "Fender Squier Classic 60s",
    price: "R$ 4.799",
    image: "/assets/classicSquier.webp",
    info: "Vindo da linha mais acessível da Fender, a Squier, este instrumento é ótimo para quem ama a música dos anos 60. O modelo tem um estilo singular, relembrando muito o que já é feito com as guitarras da marca. Acompanha as quatro cordas, formato tradicional dos contrabaixos."
  },
  {
    id: 4,
    title: "Rozini Viola Caipira",
    price: "R$ 1.079",
    image: "/assets/violaCaipira.jpg",
    info: "A viola caipira é um instrumento proeminente no Brasil, com som encorpado e afinações únicas. Este instrumento possui cinco pares de duas cordas, que podem ser afinadas de diferentes maneiras, tornando-o extremamente versátil e único."
  }
];

export async function GET() {
  return NextResponse.json(produtos);
}