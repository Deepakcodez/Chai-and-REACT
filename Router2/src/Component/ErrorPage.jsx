import { useLocation } from "react-router-dom"


export default function ErrorPage() {
  const location = useLocation();
  // console.log('>>>>>>>>>>>', location)
  return (
    <>
    <div className='h-[80vh] px-7'> {location.pathname} does not exist</div>
    </>
  )
}
