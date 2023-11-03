import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";                            
import ErrorPage from "./ErrorPage";
import Home from "./Home";

export default function Layout() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}
