import axios from "axios";
import { Fragment,  useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { cartContext } from "../Context";

const Home = () => {
  let [search, setSearch] = useState("");
  let [isloading, setLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [radiovalue, setRadioValue] = useState("");
    
//context 
       const{cart,setCart}=useContext(cartContext)




  //   searchHandler
  const searchHandler = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const searchFiltered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchFiltered);
  };



  // radio button handler

  const radioHandler = (e) => {
    console.log(">>>>>>>>>>>", e.target.value);
    let inputPrice = Number(e.target.value);
    // console.log('>>>>>>>>>>>', typeof inputPrice)
    setRadioValue(inputPrice);
    if (!inputPrice) return setFilteredProducts(products);
    const priceFilteredProduct = products.filter(
      (product) => product.price <= inputPrice
    );
    // console.log('>>>>>>>>>>>price filtered', priceFilteredProduct)
    setFilteredProducts(priceFilteredProduct);
  };
  




console.log('>>>>>>>>>>>', cart)










  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const resp = await axios.get("https://dummyjson.com/products");
        console.log(">>>>>>>>>>>", resp.data.products);
        setProducts(resp.data.products);
        setLoading(false);
      };
      fetchProducts();
    } catch (error) {
      console.log(">>>>>>>>>>>", error);
    }
  }, []);

  return (
    <>
      {/* search  */}
      <>
        <div className="home flex justify-center mt-3">
          <input
            type="text"
            value={search}
            name="search"
            onChange={searchHandler}
            className="border-2 border-black border-e-transparent rounded-s-lg ps-3 w-[20rem]"
            placeholder="search product"
          />
          <CiSearch className=" bg-blue-500 text-white border-2 border-black border-s-transparent  w-9 text-sm  rounded-e-lg h-[inherit] hover:bg-blue-600 " />
        </div>
      </>

      <div className="flex">
        {/* sidebar */}
        <>
          <div className="sidebar h-screen  min-w-[15rem] mt-5 ms-3 rounded-md  bg-slate-200 me-9 ">
            <div className="p-4 mt-8 float-end flex flex-col gap-6">
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="price"
                  value={100}
                  onChange={radioHandler}
                />
                <label htmlFor="price">less than 100</label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="price"
                  value={500}
                  onChange={radioHandler}
                />
                <label htmlFor="price">less than 500</label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="price"
                  value={1000}
                  onChange={radioHandler}
                />
                <label htmlFor="price">less than 1000</label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="price"
                  value={2000}
                  onChange={radioHandler}
                />
                <label htmlFor="price">less than 2000</label>
              </div>
            </div>
          </div>
        </>

        {!isloading ? (
          <>
            <div className="products flex  justify-center sm:justify-start   flex-wrap  max-w-[70rem] w- gap-4 mt-3 p-2 px-4 ">
              {(search === "" && radiovalue === ""
                ? products
                : filteredProducts
              ).map((product, index) => {
                return (
                  <Fragment key={index}>
                    <div className=" p-3 bg-slate-200 rounded-md h-[20rem] w-[15rem] shadow-md   flex flex-col hover:bg-slate-300 hover:shadow-xl">
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
                      {!cart.some((cartProduct) => cartProduct.id === product.id)?
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
                  </Fragment>
                );
              })}
            </div>
          </>
        ) : (
          <div className="h-screen w-full flex items-center justify-center">
            <h1> Loading..........</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
