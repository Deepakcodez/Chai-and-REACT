import { useState } from "react"
import 'D:/code playground/07/react/ChaiAndReact/Chai-and-REACT/localStorage/node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Comp2() {

    let [data,setData] = useState({})
const clickHandler=()=>{

     let sdata = localStorage.getItem( "data")
     let orgdata = JSON.parse(sdata)
     console.log(orgdata)
     setData(orgdata)
     console.log('>>>>>>>>>>>', data)
}

  return (
    <>
    <div className="container">
    <h1>component 2</h1>
    <button className="btn btn-primary " onClick={clickHandler}>get data</button>
    <p>name:{data.name}</p>
    <p>dept:{data.department}</p>
    <p>join date:{data.joinDate}</p>
    </div>
    </>
  )
}
