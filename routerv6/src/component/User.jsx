import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
 
    let params = useParams();
    let {name} = params;

  return (
    <>
        <div className="user bg-slate-400 h-72">
            user name is {name}
             </div>
    </>
  )
}

export default User