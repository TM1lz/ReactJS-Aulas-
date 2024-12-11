// import MansageData from './components/MansageData'
// import ListRender from './components/ListRender'
// import ShowUserName from "./components/ShowUserName";
import FromTextArea from "./components/FromTextArea";
import Myfrom from "./components/Myfrom";
import "./App.css";
// import Cond from './components/Cond'
function App() {
  // const name = [
  //   {name: "joao",age: 25,},
  //   {name: "Pedro", age: 30 },
  //   {name: "Carlos", age: 50 },
  //   {name: "Junior", age: 28 },
  //   {name: "Sales", age: 31},
  //   {name: "Bryan", age: 20 }
  // ];
  return (
    <div>
      {/* <MansageData></MansageData> */}
      {/* <ListRender></ListRender> */}
      {/* Loop em arrey */}
      {/* {name.map((names)=>(
        <ShowUserName key={name.age} name = {names}></ShowUserName>
      ))} */}
      <Myfrom></Myfrom>
      {/* Dinamic H1 usando if */}
      {/* <h1 style={ n <2 ? {color : "red" } : {color : "blue"}}>Este é h1 é com if</h1>
      <h1 className={classTilte ? "red-tilte" : "tilte"}>Este h1 com className</h1>
       */}
       <FromTextArea></FromTextArea>
    </div>
  );
}

export default App;
