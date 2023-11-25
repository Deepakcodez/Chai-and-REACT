import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
        <div>Home</div>
        <Link to="/blog">  go to blog page</Link>

    </>

  )
}

export default Home