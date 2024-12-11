import { useState } from "react"
import "./Myform.css"

export default function Myfrom() {
    const [name , setName] = useState()
    const handleSubmit = (event)=>{
      event.preventDefault();
      console.log("Enviado")
    }
  return (
    <>
    <form  onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" value="Enviar"/>
            <h1>{name}</h1>
        </div>
        <label >
        </label>
    </form>
    </>
  )
}
