import { Route, Routes } from "react-router-dom";
import Navbar from "./component/shared/Navbar";
import Home from "./component/Home";
import { Login } from "./component/Login";
import { About } from "./component/About";
import { Routprotector } from "./component/middleware/Routprotector";

function App() {
  return (
    <>
      <main className=" h-screen ">
        <Navbar />
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Routprotector Component={Home}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
