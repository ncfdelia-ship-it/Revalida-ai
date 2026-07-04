"use client";

import { useState } from "react";
import { casos } from "@/lib/casos";

export default function Paciente() {
  const caso = casos[0];

  const [chat, setChat] = useState([
    { role: "paciente", text: caso.paciente }
  ]);

  const [msg, setMsg] = useState("");

  function enviar() {
    if (!msg) return;

    const resposta =
      caso.respostas[Math.floor(Math.random() * caso.respostas.length)];

    setChat([
      ...chat,
      { role: "medico", text: msg },
      { role: "paciente", text: resposta }
    ]);

    setMsg("");
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>{caso.titulo}</h1>

      <div style={{ marginBottom: 20 }}>
        {chat.map((c, i) => (
          <p key={i}>
            <b>{c.role === "medico" ? "Você" : "Paciente"}:</b> {c.text}
          </p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Fazer pergunta..."
        style={{ padding: 10, width: "70%" }}
      />

      <button onClick={enviar} style={{ padding: 10, marginLeft: 10 }}>
        Enviar
      </button>
    </div>
  );
}
