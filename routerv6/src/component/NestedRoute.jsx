import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function NestedRoute() {
  return (
    <>
    <div className="bg-slate-400 h-72">
      <h1>nested routes page</h1>
      <div className="cont1 bg-slate-300 h-60 w-60">
        <NavLink to="Pg1">page 1 </NavLink> <br />
        <NavLink to="Pg2">page 2 </NavLink> <br />
        <NavLink to="Pg3">page 3 </NavLink> <br />
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default NestedRoute