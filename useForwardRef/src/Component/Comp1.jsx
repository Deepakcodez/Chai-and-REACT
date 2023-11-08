import {forwardRef} from 'react'

function comp1(props,ref) {
  return (
    <>
    <h4 className='bg-red-100'>Input Feild</h4>
    <input type="text" ref={ref} className='w-[30%]  border border-red-900' />
    </>

  )
}

export default forwardRef(comp1);
