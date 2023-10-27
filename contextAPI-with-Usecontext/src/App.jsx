
import  Comp1 from './Component/Comp1'
import Comp3 from './Component/comp3'

function App() {

  return (
    <>
    <div className="con h-screen w-screen bg-slate-800 text-center text-white text-4xl pt-5">
    <h1>comp1</h1>
      <Comp1>
        <Comp3/>
      </Comp1>
      </div>

    </>
  )
}

export default App
