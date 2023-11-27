import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Blog from './component/Blog';
import About from './component/About';
import NotFound from './component/NotFound';
import Navbar from './component/Navbar';
import User from './component/User';
import Searchparam from './component/Searchparam';

function App() {
  return (
<>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/user/:name' element={<User/>}></Route>
  <Route path='/searchparam' element={<Searchparam/>}></Route>
  {/* <Route path='/*' element={<NotFound/>}></Route> */}
  <Route path='/*' element={<Navigate to="/" /> }></Route>
 </Routes>
 
 </BrowserRouter>
</>
  );
}

export default App;
