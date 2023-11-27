import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigatePG() {

  const navigate=useNavigate()
  const navigateHandler=(url)=>{
    navigate(url)
  }
  return (
    <>
    <div className=' bg-slate-400 h-72'>

    <h1>navigate page</h1>
    
    <button className='bg-blue-600 p-2 me-1 text-white rounded'
    onClick={()=>navigateHandler("/home")}
    >go to home</button>
    <button className='bg-blue-600 p-2 text-white rounded'
    onClick={()=>navigateHandler("/about")}
    >go to about</button>

    </div>
   
    </>
  )
}

export default NavigatePG