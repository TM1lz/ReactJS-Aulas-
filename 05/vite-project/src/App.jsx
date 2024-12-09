// import MansageData from './components/MansageData'
// import ListRender from './components/ListRender'
import ShowUserName from "./components/ShowUserName";
import "./App.css";
// import Cond from './components/Cond'
function App() {
  const name = [
    {name: "joao",age: 25,},
    {name: "Pedro", age: 30 },
    {name: "Carlos", age: 50 },
    {name: "Junior", age: 28 },
    {name: "Sales", age: 31},
    {name: "Bryan", age: 20 }
  ];
  return (
    <div>
      {/* <MansageData></MansageData> */}
      {/* <ListRender></ListRender> */}
      {/*Loop em arrey*/}
      {name.map((names)=>(
        <ShowUserName key={name.age} name = {names}></ShowUserName>
      ))}
    </div>
  );
}

export default App;
