import { useState } from "react"


export default function Input() {
let [print ,setPrint] = useState(null)
  let onchangeHandler=(e)=>{
         setPrint(e.target.value)
  }
  return (
    <>
    <div className="container w-[100%] h-[100vh] flex items-center justify-content-center flex-col  bg-slate-900">
    <div className="  min-h-[5rem] h-[auto] w-[50%] bg-slate-500  text-white mb-9 rounded-lg mt-4 px-4 whitespace-pre-line">{print}</div>
    <input type="text" 
    onChange={onchangeHandler}
    placeholder="Enter Text Here" 
    className=" border-2 w-[50%] border-blue-500  h-[2rem] px-2 whitespace-pre-line"  />
    </div>
    </>
  )
}
