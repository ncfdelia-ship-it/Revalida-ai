"use client";

import { useState } from "react";

export default function Paciente() {
  const [mensagem, setMensagem] = useState("");
  const [chat, setChat] = useState([
    { role: "paciente", text: "Olá doutor, estou me sentindo mal..." }
  ]);

  function enviar() {
    if (!mensagem) return;

    const novoChat = [
      ...chat,
      { role: "medico", text: mensagem },
      { role: "paciente", text: "Entendo doutor... pode continuar." }
    ];

    setChat(novoChat);
    setMensagem("");
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Paciente Simulado</h1>

      <div style={{ marginBottom: 20 }}>
        {chat.map((c, i) => (
          <p key={i}>
            <b>{c.role === "medico" ? "Você" : "Paciente"}:</b> {c.text}
          </p>
        ))}
      </div>

      <input
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite sua pergunta..."
        style={{ padding: 10, width: "70%" }}
      />

      <button onClick={enviar} style={{ padding: 10, marginLeft: 10 }}>
        Enviar
      </button>
    </div>
  );
}
