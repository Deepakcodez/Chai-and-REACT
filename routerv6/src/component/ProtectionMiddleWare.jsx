import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function ProtectionMiddleWare({Component}) {

 const navigate = useNavigate();
 const login =false

 useEffect(()=>{
    if(!login){
        navigate('/login')
     }
 })

  return (
    <>
      <Component/>
    </>
  )
}

export default ProtectionMiddleWare