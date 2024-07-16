import React from "react";
import { NavLink } from "react-router-dom";
import CryptoBack from "./images/backCrypto.png";
import { ImageHolder, ImageTwo } from "./design.styled";

const Home = () => {
  return (
    <ImageHolder>
      <ImageTwo src={CryptoBack} alt="" />
    </ImageHolder>
  );
};

export default Home;
