import { useState } from 'react'

export default function ListRender() {
    const [list] = useState(["Matheus" , "Lucas" , "Pedro"])
    const Randon = ()=>{
        const randnum = Math.floor(Math.random * 3)
        return randnum
        
    }
  return (
    <div><ul>
        </ul>{list.map((list , i)=>(
            <li key={i}>{list}</li>
        ))}
        <p>Teste</p>
        <button onClick={()=>{ Randon
        }}></button>
        </div>
        
  )
}
