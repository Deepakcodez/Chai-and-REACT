import { useParams } from "react-router-dom"

function Profile() {

    const {userName } = useParams();
    console.log('>>>>>>>>>>>', userName)
  return (
    <>
    <div className="h-[80vh]">Hello {userName}</div>
    </>
  )
}                         

export default Profile