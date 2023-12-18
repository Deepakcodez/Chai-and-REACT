import React from 'react'

function Products(props) {
    
  return (
   <>
   <div className="card h-48 bg-slate-500 m-3 w-[15rem] rounded-lg shadow-lg p-11 grow ">
    <div className="name"> product name:{props.name}</div>
     <button className='bg-blue-800 rounded-lg p-2  text-white'>add  to cart</button>
   </div>
   </>
  )
}

export default Products