import Link from "next/link";
import { casos } from "@/lib/casos";

export default function Stacoes() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Estações Clínicas</h1>

      <p>Escolha um caso para iniciar:</p>

      {casos.map((c) => (
        <div key={c.id} style={{ marginTop: 20 }}>
          <Link href="/paciente">
            <button style={{ padding: 12 }}>
              {c.titulo}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
