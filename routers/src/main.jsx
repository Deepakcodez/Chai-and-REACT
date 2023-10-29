import React from 'react'
import ReactDOM from 'react-dom/client'
import {   Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Component/Layout' 
import About from './Component/About'
import Blogs from './Component/Blogs'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Errorpage from './Component/Errorpage'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<Errorpage/>}/>
    </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
)
