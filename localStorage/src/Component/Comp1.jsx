import { useState } from "react"
import 'D:/code playground/07/react/ChaiAndReact/Chai-and-REACT/localStorage/node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Comp1() {
 
    let [name , setName] = useState('')
    let [dept , setDept] = useState('')
    let [jdate , setJdate] = useState('')

    const dateHandler=(e)=>{
        setJdate(e.target.value)
    }

    const deptHandler=(e)=>{
        setDept(e.target.value)
    }

    const nameHandler=(e)=>{
        setName(e.target.value)
    }
const obj={
    name:name,
    department: dept,
    joinDate : jdate

}
 let data = JSON.stringify(obj)

    const fetchdata=()=>{

        localStorage.setItem("data", data)


    }
    

  return (
    <>
    <div className="container">
    <h1>component 1</h1>
    <div className="row">
    name: <input type="text" className="" onChange={nameHandler} />
    </div>
    <div className="row">
    department: <input type="text" onChange={deptHandler}/> 
    </div>
     <div className="row">
     Join date: <input type="text" onChange={dateHandler}/> 
     </div>
    <button className="btn btn-success my-2" onClick={fetchdata}>send data </button>   
    </div>
    </>
  )
}
