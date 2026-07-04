import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mensagem } = await req.json();

  // versão simples (mock IA por enquanto)
  const respostas = [
    "Entendo doutor... isso começou há alguns dias.",
    "Sim, também sinto cansaço junto.",
    "Não sei dizer exatamente quando começou.",
    "A dor piora quando me movimento."
  ];

  const resposta =
    respostas[Math.floor(Math.random() * respostas.length)];

  return NextResponse.json({ resposta });
}
