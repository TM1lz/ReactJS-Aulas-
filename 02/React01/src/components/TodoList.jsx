
import { useState } from 'react';

export default function TodoList() {
  let [mensage , setMensage ] = useState('Olaa Mundo')
  return (
    <div>
      <h1>Teste</h1>
      <h1>{ mensage }</h1>
      <button onClick={setMensage("Teste")}>Click</button>
    </div>
  )
}

