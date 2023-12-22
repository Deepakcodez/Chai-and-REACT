import  { Fragment, useContext } from 'react'
import { cartContext } from "../Context";

export const Cart = () => {

    const{cart,setCart}=useContext(cartContext)

  return (
       <>
       <div className='flex flex-wrap gap-8 mt-4 px-4 justify-center sm:justify-start'>
       {
        cart.map((product,index)=> <Fragment key={index}>
        <div className="  p-3 bg-slate-200 rounded-md h-[20rem] w-[15rem] shadow-md   flex flex-col hover:bg-slate-300 hover:shadow-xl">
          <img
            className="h-[10rem] bg-center "
            src={product.thumbnail}
            alt="img"
          />
          <div className="flex justify-between p-3">
            <h1 className="truncate"> {product.title}</h1>
            <h1> {product.price}</h1>
          </div>

          <div className="discription truncate text-gray-400 text-sm">
            {product.description}
          </div>
          {/* button logic */}
          {!cart.includes(product)?
            <div className="mt-2">
            <button className="bg-blue-500 px-2 rounded-sm text-white py-1 shadow-md "
            onClick={()=>{setCart([...cart,product])}}
            >
              add to cart
            </button>
          </div>:
           <div className="mt-2">
           <button className="bg-blue-500 px-2 rounded-sm text-white py-1 shadow-md "
           onClick={()=>{setCart(cart.filter((cartprod)=>cartprod.id!==product.id))}}
           >
             remove from cart
           </button>
         </div>
          }
          
        </div>
      </Fragment>)
       }
       </div>
       </>
  )
}
