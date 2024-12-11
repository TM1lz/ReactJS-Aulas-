import { useState } from "react";

export default function FromTextArea() {
    const [bio , setBio] = useState("")
  return (
    <>
      <form>
        <label> <span>Bio: </span>
        <textarea name="bio" placeholder="Descricao do usuario" onChange={(e)=>{setBio(e.target.value)}} value={bio}></textarea>
        <input type="submit" value=" Enviar" /></label>
       
      </form>
    </>
  );
}
