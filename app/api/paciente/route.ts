import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mensagem } = await req.json();

  const respostas = [
    "Entendo doutor... isso começou há alguns dias.",
    "Sim, isso piora quando faço esforço.",
    "Não, nunca tive algo assim antes.",
    "Agora que você pergunta, também sinto isso.",
    "A dor é mais forte à noite."
  ];

  const resposta =
    respostas[Math.floor(Math.random() * respostas.length)];

  return NextResponse.json({ resposta });
}
