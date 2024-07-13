import React from 'react'
import Navbar from './componenets/navbar'
import Home from './componenets/home'
import Coins from './componenets/coins'
import AboutUs from './componenets/aboutUs'
import Login from './componenets/login'
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
