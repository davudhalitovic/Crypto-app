import React from 'react'
import Navbar from './router/navbar'
import Home from './router/home'
import Coins from './router/coins'
import AboutUs from './router/aboutUs'
import Login from './router/login'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/coins" element={<Coins />}></Route>
    <Route path="/aboutUs" element={<AboutUs />}></Route>
    <Route path="/profile" element={<Login />}></Route>
   </Routes>
   
    </>
  )
}

export default App
