import React from "react";
import CryptoBack from "./images/backCrypto.png";
import { ImageHolder, ImageTwo, Center } from "./design.styled";
import Crypto from "../setup/crypto.jsx";

const Home = () => {
  return (
    <>
    <Center>
      <ImageHolder>
        <ImageTwo src={CryptoBack} alt="" />
      </ImageHolder>
    </Center>
    <Crypto />
    </>
  );
};

export default Home;
