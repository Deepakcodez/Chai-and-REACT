import {useDispatch} from 'react-redux'
import { addItems } from '../redux/CartSlice';
function Products(props) {
    
   
    const dispatch = useDispatch();
  return (
   <>
   <div className="card h-48 bg-slate-500 m-3 w-[15rem] rounded-lg shadow-lg p-11 grow ">
    <div className="name"> product name:{props.name}</div>
     <button className='bg-blue-800 rounded-lg p-2  text-white'
     onClick={(e)=>dispatch(addItems({name:props.name,price:props.price}))}
     >add  to cart</button>
   </div>
   </>
  )
}

export default Products