import React from 'react'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
    <>
        <div className=' bg-slate-400 h-72'>Home
        <NavLink to="/blog"> <div className="NavLink bg-blue-400">go to blog page</div>  </NavLink>

        </div>

    </>

  )
}

export default Home