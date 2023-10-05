import "./App.css";
import {useState} from "react";


function App() {
  let[counter, setCounter] = useState(0);
const addValue=()=>{
     setCounter(counter+1)
}
const subValue=()=>{
  if(counter===0){
       setCounter(0)
  }else{
    setCounter(counter-1)
  }
}
  return (
    <>
      <div className="container">
        <h1>React HOOKS</h1>
        <h2>Counter App</h2>
        <div className="wrapper">
        <div className="screen">{counter}</div>
        <div className="buttons">
          <button className="add" onClick={addValue}>increase </button>
          <button className="sub" onClick={subValue}>decrease </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
