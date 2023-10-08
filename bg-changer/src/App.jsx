import { useState } from 'react';
import './App.css';

function App() {
  const[color , setColor] = useState("black")
  return (
    <>
<div className="container flex items-end  justify-center h-[100vh]" style={{background:color}}>

<div className="flex items-center justify-center gap-4 mb-5 flex-wrap w-[90%] h-auto ">
 
 <button onClick={()=>{setColor('red')}} className='py-1 px-4 drop-shadow-md duration-100 text-white border border-red-800 rounded-full bg-red-600 hover:bg-red-700 hover:scale-105' >Red</button>
 <button onClick={()=>{setColor('green')}} className='py-1 px-4 drop-shadow-md text-white border border-green-800 rounded-full bg-green-600 hover:bg-green-700 hover:scale-105' >Green</button>
 <button onClick={()=>{setColor('purple')}} className='py-1 px-4 drop-shadow-md text-white border border-purple-800 rounded-full bg-purple-600 hover:bg-purple-700 hover:scale-105' >Purple</button>
 <button onClick={()=>{setColor('pink')}} className='py-1 px-4 drop-shadow-md text-white border border-pink-800 rounded-full bg-pink-600 hover:bg-pink-700 hover:scale-105' >Pink</button>
 <button onClick={()=>{setColor('yellow')}} className='py-1 px-4 drop-shadow-md text-white border border-yellow-800 rounded-full bg-yellow-600 hover:bg-yellow-700 hover:scale-105' >yellow</button>

</div>
</div>
    </>
  );
}

export default App;
