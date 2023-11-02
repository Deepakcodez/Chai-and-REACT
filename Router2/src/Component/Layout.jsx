import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";

export default function Layout() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
