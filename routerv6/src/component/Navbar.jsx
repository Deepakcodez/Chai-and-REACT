import React from 'react'
import { NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
     <div className="cont bg-slate-500 p-3 text-white">
        <ul className='flex gap-3 '>
            <li> <NavLink style={({isActive})=>{return {color:isActive?'red':'white'}}} to="/home">home</NavLink> </li>
            <li>  <NavLink to='/about'>about</NavLink> </li>
            <li><NavLink to='/blog'>blogs</NavLink> </li>
            <li><NavLink to='/searchparam'>searchParam</NavLink> </li>
            <li><NavLink to='/navigate'>navigate</NavLink> </li>
        </ul>
     </div>
    </>
  )
}

export default Navbar