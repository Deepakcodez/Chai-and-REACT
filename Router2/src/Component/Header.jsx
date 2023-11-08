import {  NavLink  } from "react-router-dom"
export default function Header() {
  return (
    <>
    <div className="header bg-slate-500 p-6">
        <ul className="flex gap-4 text-white active:blue">
            <li className=""><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/profile" >Profile</NavLink></li>
        </ul>
    </div>
    </>
  )
}
