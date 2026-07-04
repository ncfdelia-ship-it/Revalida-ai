import Link from "next/link";

export default function Stacoes() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Estações Clínicas</h1>

      <p>Escolha uma estação para iniciar o treino:</p>

      <Link href="/paciente">
        <button style={{ padding: 12, marginTop: 20 }}>
          Dor Torácica (Paciente Simulado)
        </button>
      </Link>
    </div>
  );
}
