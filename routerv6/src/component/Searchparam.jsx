import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Searchparam() {

  const[searchParam,setsearchParams]=useSearchParams();
  const age = searchParam.get('age')
  const city = searchParam.get('city')

  return (
    <>
    <div className=' bg-slate-400 h-72'>
    {/* http://localhost:5173/searchparam?age=60&city=jalandhar */}
        <h2>age is {age||"need query"}</h2>
        <h2>city is {city||"need query"}</h2>

        {/* to set search param  */}

        <input className='mt-3 px-2'  type="text" placeholder='enter age param here'  
        onChange={(e)=>setsearchParams({age:e.target.value})}
        />
        <br />
        <input className='mt-3 px-2' type="text" placeholder='enter city param here'  
        onChange={(e)=>setsearchParams({city:e.target.value})}
        />
    </div>
    </>
  )
}

export default Searchparam