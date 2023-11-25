import React from 'react'
import { Link } from 'react-router-dom'

function about() {
  return (
    <>
        <div className=' bg-slate-400 h-72'>about <br/>
        <h3 className='bg-red-200'>users</h3>
        <Link to="/user/anil">anil</Link> <br />
        <Link to="/user/peter">peter</Link>
        </div>
    </>
  )
}

export default about