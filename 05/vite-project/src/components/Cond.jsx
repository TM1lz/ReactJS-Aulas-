import { useState } from "react";

export default function Cond() {
  let [name, setName] = useState("Joao");
  return (
    <div>
      <h1>Isso sera exibido</h1>
      {name === "Joao" ? <p>Nome Joao</p> : <p>Nome nao encontrado</p>}
      <button
        onClick={() => {
          setName("Matheus");
        }}
      >
        Button
      </button>
    </div>
  );
}
