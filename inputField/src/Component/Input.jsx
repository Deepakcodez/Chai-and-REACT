import { useState } from "react"


export default function Input() {
let [print ,setPrint] = useState(null)
let [btnclicked, setbtnclickded] = useState(false)



  let onchangeHandler=(e)=>{
  
      setPrint(e.target.value)
      setbtnclickded(false)
    
  }
  let onClickHandler=()=>{
    setbtnclickded(true)
  }
  return (
    <>
    <div className="container w-[100%] h-[100vh] flex items-center justify-content-center flex-col  bg-slate-900">
      

      
  <div className="  min-h-[5rem] h-[auto] w-[50%] bg-slate-500  text-white mb-9 rounded-lg mt-4 px-4 whitespace-pre-line">{btnclicked?print:null}</div>
      
    <input type="text" 
    onChange={onchangeHandler}
    placeholder="Enter Text Here" 
    className=" border-2 w-[50%] border-blue-500  h-[2rem] px-2 whitespace-pre-line"  />
    <button className=" bg-blue-300 hover:bg-blue-500 ease-in duration-300  mt-2 py-1 px-3 rounded-full hover:scale-110 hover:text-white" onClick={onClickHandler}>send Data</button>
    </div>
    </>
  )
}
