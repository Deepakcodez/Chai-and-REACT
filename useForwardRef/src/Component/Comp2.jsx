import { useRef } from 'react'
import Comp1 from './Comp1'
export default function Comp2() {
  let inputref = useRef()
  const setValue = () =>{
      inputref.current.value='hello boss'
  }
  return (
    <>
    <br />
    <Comp1 ref={inputref}/>
    <button className='  my-5 p-3 border-2' onClick={setValue}>Smash</button>
    </>
  )
}
