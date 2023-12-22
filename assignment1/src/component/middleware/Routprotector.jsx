import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Routprotector = ({Component}) => {
  const navigate = useNavigate()
  let token = localStorage.getItem("userToken")
  // console.log('>>>>>>>>>>>', token)
  useEffect(()=>{
if(!token) 
    navigate("/login")
},[])
  return (

    <Component/>
  )
}
