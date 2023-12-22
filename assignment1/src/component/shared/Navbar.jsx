import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
<>
<div className="navbar bg-slate-300 h-16 w-full flex items-center justify-between px-7">
{/* logo  */}
    <div className="logo font-bold text-2xl">Shop APP</div>


{/* mid of nav  */}
    <ul className="menu flex gap-3">
        <li><NavLink to={"/home"} >Home</NavLink> </li>
        <li><NavLink to={"/about"}>About</NavLink> </li>
    </ul>

{/* right side of nav  */}
    <div className="cart">
        {/* <NavLink to={"/login"} className={"bg-blue-500 px-3 py-1 rounded-md text-white shadow-lg"}>Login</NavLink>  */}
        
        </div>
</div>
</> 
 )
}
