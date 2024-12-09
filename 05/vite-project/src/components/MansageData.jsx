import { useState } from "react"


export default function MansageData() {
    const someData = 10
    
    const [number ,  SetNumber] = useState(1)
  return (
    <div>MansageData
        <p>Valor {someData}</p>
        <button onClick={()=>{}}>Button1</button>
        <p>Proximoi</p>
        <p>Valor {number}</p>
        <button onClick={()=>SetNumber(number + 30)}>Button2</button>
    </div>
    
  )
}
