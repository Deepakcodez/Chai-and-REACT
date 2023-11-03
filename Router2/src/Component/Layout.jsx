import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Layout2 from "./Layout2";
import Home from "./Home";

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout2 />}>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
