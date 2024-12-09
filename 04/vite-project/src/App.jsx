
import './App.css'
import img from "../public/img1.jxn"
function App() {

  return(
    <div>
      {/*IMAGEM COM SRC E VARIAVEL*/}
      <img src="../public/download(2)." alt="" />
      <img src={img} alt="" />
    </div>
  )
}

export default App
