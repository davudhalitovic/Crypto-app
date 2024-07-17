import React from "react";
import { NavLink } from "react-router-dom";
import CryptoBack from "./images/backCrypto.png";
import { ImageHolder, ImageTwo, Center } from "./design.styled";

const Home = () => {
  return (
    <Center>
      <ImageHolder>
        <ImageTwo src={CryptoBack} alt="" />
      </ImageHolder>
    </Center>
  );
};

export default Home;
