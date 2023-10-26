import { useState } from "react";

export default function Form() {
      let [name,setName] = useState('')
      let [email,setEmail] = useState('')
      let [student,setStudent] = useState(false)
      let [allEntry,setAllEntry] = useState([])
      const nameHandler=(e)=>{
        setName(e.target.value)
        console.log('>>>>>>>>>>>', e.target.value)
      }
      const emailHandler=(e)=>{
        setEmail(e.target.value)
        console.log('>>>>>>>>>>>', e.target.value)
      }
      const studentHandler=()=>{
        setStudent(!student)
      }
      const submit=(e)=>{
          e.preventDefault();
          const  newEntry = {name:name,email:email,student:student}
          setAllEntry([...allEntry,newEntry])

          console.log('>>>>>>>>>>>', allEntry)
      }
    
  return (
    <>
      <div className="container bg-blue-500 h-[30rem] w-[25rem] rounded-md mt-5">
        <h2 className=" text-4xl text-white text-center pt-8">Form</h2>
        <form action="" className="flex flex-col px-8 gap-4 " onSubmit={submit}>
          <input
            type="text"
            onChange={nameHandler}
            className="border-2 border-black-300 ps-2  rounded-sm mt-5"
            placeholder="Enter your name"
          />

          <input
            type="email"
            onChange={emailHandler}
            className="border-2 border-black-300 ps-2 rounded-sm"
            placeholder="Enter your email"
          />

          <div>
            <input type="checkbox" onClick={studentHandler} name="student" id="" />{" "}
            <span className="text-white">Student</span>
          </div>
         <button type="submit" className="bg-green-500 text-white py-2">Login</button>
        </form>
      </div>
    </>
  );
}
