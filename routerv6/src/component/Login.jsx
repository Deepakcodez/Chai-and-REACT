import { Input } from 'postcss'
import React from 'react'

function Login() {
  return (
    <>
    <h1>Login page</h1>
    <input type="text" placeholder='enter email here' className='border-2 border-black-200' /><br />
    <input type="password" placeholder='enter password here' className='border-2 border-black-200' />
    </>
  )
}

export default Login