import React from "react";
import Navbar from "./Components/router/navbar.jsx";
import Home from "./Components/router/home.jsx";
import Coins from "./Components/router/coins.jsx";
import AboutUs from "./Components/router/aboutUs.jsx";
import Login from "./Components/router/login.jsx";
import { Route, Routes } from "react-router-dom";
import Crypto from "./Components/setup/crypto.jsx";
import Footer from "./Components/router/footer.jsx";
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
