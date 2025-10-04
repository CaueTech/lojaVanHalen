import { NextResponse } from "next/server";

const comentarios =
        [
            {
                id:  1,
                nome: "Cauê Oliveira",
                img: "assets/mugshot.jpg",
                texto: "Melhor loja de música que já visitei em Salvador!",
                insta: "caueOliveiraMock"
            },
            {
                id:  2,
                nome: "Gustavo Gabriel",
                img: "assets/gustavo.jpg",
                texto: "Amei o lugar! Sou canhoto, e consegui achar minha primeira guitarra canhota aqui!",
                insta: "gutoGabrielMock"
            },
            {
                id:  3,
                nome: "Ana Carolina Teixeira",
                img: "assets/carol.jpg",
                texto: "Amei visitar a loja! Instrumentos lindos e bem cuidados!",
                insta: "carolTeixeiraMock"
            },
            {
                id:  4,
                nome: "Isaque Escorrêgo",
                img: "assets/isaque.jpg",
                texto: "INCRÍVEL.",
                insta: "isaqueEscorregoMock"
            }
        ]

export async function GET() {
  return NextResponse.json(comentarios);
}