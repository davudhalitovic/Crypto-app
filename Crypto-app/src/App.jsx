import React from "react";
import Navbar from "./components/router/navbar.jsx";
import Home from "./components/router/home.jsx";
import Coins from "./components/router/coins.jsx";
import AboutUs from "./components/router/aboutUs.jsx";
import Login from "./components/router/login.jsx";
import { Route, Routes } from "react-router-dom";
import Crypto from "./components/setup/crypto.jsx";
import Footer from "./components/router/footer.jsx";

import "./App.css";
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
      <Footer />
    </>
  );
}

export default App;
