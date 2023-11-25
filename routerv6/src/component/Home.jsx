import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
        <div className=' bg-slate-400 h-72'>Home
        <Link to="/blog"> <div className="link bg-blue-400">go to blog page</div>  </Link>

        </div>

    </>

  )
}

export default Home