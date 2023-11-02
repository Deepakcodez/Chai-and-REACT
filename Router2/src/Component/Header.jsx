import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
    <div className="header bg-slate-500 p-6">
        <ul className="flex gap-4 text-white active:blue">
            <li className=""><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
        </ul>
    </div>
    </>
  )
}
