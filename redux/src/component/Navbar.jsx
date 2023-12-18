import { useSelector } from 'react-redux';

const selectCart = (state) => state.cart;

function Navbar() {
  const cart = useSelector(selectCart);
  const totalPrice = cart.reduce((a, b) => a + parseFloat(b.price), 0);

  return (
    <>
      <div className="nav bg-slate-600 h-10 w-full flex justify-between px-5 text-white items-center font-semibold">
        <h1> REDUX TOOLKIT</h1>
        <h1 className='pe-20'>cart({cart.length}) {totalPrice}</h1>
      </div>
    </>
  );
}

export default Navbar;
