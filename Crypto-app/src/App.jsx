import React from 'react'
import Navbar from './Components/router/navbar'
import Home from './Components/router/home'
import Coins from './Components/router/coins'
import AboutUs from './Components/router/aboutUs'
import Login from './Components/router/login'
import { Route, Routes } from 'react-router-dom'
import Crypto from './Components/setup/crypto'
import './App.css'
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
   <Crypto />
    </>
  )
}

export default App
