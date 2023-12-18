import products from './products.json'
import './App.css'
import Products from './component/Products'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div className="products flex flex-wrap">
    {products.map((product)=> (<Products key={product.id} {...product}/>))}
    </div>
    </>
  )
}

export default App
