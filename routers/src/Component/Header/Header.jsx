import { Link,NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    
    <div className="navbar h-10 w-screen bg-slate-600 flex justify-between px-5 items-center text-white">
   <h1 >logo</h1>
   <ul className="flex gap-4">
    <li> <Link to='</about>'>Home</Link> </li>
    <li>About</li>
   </ul>
    </div>
    </>
  )
}
