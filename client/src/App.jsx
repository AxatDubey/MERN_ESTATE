import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Porfile from './pages/Porfile'
import Signout from './pages/Signout'
import Header from './components/Header'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Porfile/>}/>
      <Route path='/sign-out' element={<Signout/>}/>
   </Routes>

   </BrowserRouter>
  )
}
