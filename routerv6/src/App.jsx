import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Blog from './component/Blog';
import About from './component/About';
import NotFound from './component/NotFound';
import Navbar from './component/Navbar';
import User from './component/User';
import NavigatePG from './component/NavigatePG';
import Searchparam from './component/Searchparam';
import NestedRoute from './component/NestedRoute';
import Pg1 from './component/Pg1';
import Pg3 from './component/Pg3';
import Pg2 from './component/Pg2';
import Login from './component/Login';
import ProtectedPG from './component/ProtectedPG';
import ProtectionMiddleWare from './component/ProtectionMiddleWare';

function App() {
  return (
<>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/ProtectedPG' element={<ProtectionMiddleWare Component={ProtectedPG}/>}/>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/user/:name' element={<User/>}></Route>
  <Route path='/searchparam' element={<Searchparam/>}></Route>
  <Route path='/navigate' element={<NavigatePG/>}></Route>
  {/* <Route path='/*' element={<NotFound/>}></Route> */}
  <Route path='/*' element={<Navigate to="/" /> }></Route>
  <Route path='/nestedRout/' element={<NestedRoute /> }>
  <Route path='Pg1' element={<Pg1/>}></Route>
  <Route path='Pg2' element={<Pg2/>}></Route>
  <Route path='Pg3' element={<Pg3/>}></Route>
  </Route>
  
 </Routes>
 
 </BrowserRouter>
</>
  );
}

export default App;
