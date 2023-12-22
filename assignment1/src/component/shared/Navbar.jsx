import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context";

export default function Navbar() {
  const { cart, setCart } = useContext(cartContext);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  return (
    <>
      <div className="navbar bg-slate-300 h-16 w-full flex items-center justify-between px-7">
        {/* logo  */}
        <NavLink to={"/home"}>
          {" "}
          <div className="logo font-bold text-2xl">Shop APP</div>
        </NavLink>

        {/* mid of nav  */}
        <ul className="menu flex gap-3">
          <li>
            <NavLink to={"/home"} className={"text-lg"}>
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/cart"} className={"text-lg"}>
              Cart
            </NavLink>{" "}
          </li>
        </ul>

        {/* right side of nav  */}
        <NavLink to={"/cart"}> <div className="cart relative ">
          <BsCart4 className="text-3xl" />
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 absolute top-0 scale-50">
            {cartCount}
          </span>
        </div></NavLink>
       
      </div>
    </>
  );
}
