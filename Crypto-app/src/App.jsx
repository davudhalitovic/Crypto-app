import React from "react";
import Navbar from "./components/router/navbar.jsx";
import Home from "./components/router/home.jsx";
import Coins from "./components/router/coins.jsx";
import AboutUs from "./components/router/aboutUs.jsx";
import Login from "./components/router/login.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/router/footer.jsx";
import "./App.css";
//IMPORTS FOR FAVORITE BUTTON
import { FavoriteProvider } from "./components/favorite/FavoriteContextProvider.jsx";
import FavoritePage from "./components/favorite/FavoritePage.jsx";
function App() {
  return (
    <>
      <Navbar />
      {/* useContext Provider for Favorite Button*/}
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/favorites" element={<FavoritePage />}></Route>
          <Route path="/profile" element={<Login />}></Route>
        </Routes>
        <Footer />
      </FavoriteProvider>
    </>
  );
}

export default App;
