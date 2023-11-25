import React from 'react'
import { Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
     <div className="cont">
        <ul className='flex '>
            <li> <Link to="/home">home</Link> </li>
            <li>  <Link to='/about'>about</Link> </li>
            <li><Link to='/blog'>blogs</Link> </li>
        </ul>
     </div>
    </>
  )
}

export default Navbar