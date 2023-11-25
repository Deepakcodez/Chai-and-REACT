import React from 'react'
import {  NavLink} from 'react-router-dom'

function about() {
  return (
    <>
        <div className=' bg-slate-400 h-72'>about <br/>
        <h3 className='bg-red-200'>users</h3>
        <NavLink to="/user/anil">anil</NavLink> <br />
        <NavLink to="/user/peter">peter</NavLink>
        </div>
    </>
  )
}

export default about