import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "1000px",
      margin: "0 auto"
    }}>

      <h1 style={{ fontSize: "48px", color: "#0B5ED7" }}>
        🩺 Revalida AI
      </h1>

      <h2>
        Treine para a segunda fase do Revalida com pacientes movidos por Inteligência Artificial.
      </h2>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Simule estações clínicas, converse com pacientes virtuais, receba
        feedback automático e acompanhe sua evolução como se estivesse na prova.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/stacoes">
          <button style={{
            padding: "15px 30px",
            fontSize: "18px",
            marginRight: "15px",
            cursor: "pointer"
          }}>
            🚀 Começar treino
          </button>
        </Link>

        <Link href="/paciente">
          <button style={{
            padding: "15px 30px",
            fontSize: "18px",
            cursor: "pointer"
          }}>
            💬 Conversar com paciente
          </button>
        </Link>
      </div>

      <hr style={{ margin: "50px 0" }} />

      <h2>O que você encontrará na plataforma</h2>

      <ul style={{ lineHeight: "2", fontSize: "18px" }}>
        <li>🗣️ Pacientes simulados com IA</li>
        <li>📋 Feedback automático da consulta</li>
        <li>📊 Dashboard de desempenho</li>
        <li>📚 Flashcards e resumos dos temas mais cobrados</li>
        <li>❤️ Área de apoio emocional para revalidandos</li>
      </ul>

      <hr style={{ margin: "50px 0" }} />

      <h2>Especialidades</h2>

      <ul style={{ lineHeight: "2", fontSize: "18px" }}>
        <li>Clínica Médica</li>
        <li>Pediatria</li>
        <li>Ginecologia e Obstetrícia</li>
        <li>Cirurgia</li>
        <li>Medicina Preventiva</li>
      </ul>

      <hr style={{ margin: "50px 0" }} />

      <h3 style={{ textAlign: "center", color: "#666" }}>
        Revalida AI ©️ 2026
      </h3>

    </main>
  );
}
