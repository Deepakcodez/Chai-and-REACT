import { useNavigate } from "react-router-dom"

export default function About () {
  const navigate = useNavigate();
  const goback=()=>{
    navigate(-1)
  }
  const gohome=()=>{
    navigate('/')
  }
  return (

    <>
    <div className='h-[80vh]'>
    <h1>This is about</h1>
    <button className="bg-red-400 border-2 border-red-900 mx-6 px-4"
    onClick={gohome}
    >go to home</button>
    <button className="bg-red-400 border-2 border-red-900 mx-6 px-4"
    onClick={goback}>previous</button>
    </div>
    </>
  )
}
