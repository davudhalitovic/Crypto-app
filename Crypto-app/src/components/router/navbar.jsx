import React from "react";
import Logo from "./images/logo.png";
import { NavLink, Link } from "react-router-dom";
import {
  Wrapper,
  NavigationBar,
  NavigationMenu,
  Image,
  NavigationLogo,
  H1,
  Li,
  NavigationMenuWrapper,
  Button,
  ButtonImage,
} from "./design.styled";
import UserLogo from "./images/user.png";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <NavigationBar>
          <NavigationLogo>
            <Image src={Logo} alt="logo" />
            <H1>CRYPTO-APP</H1>
          </NavigationLogo>
          <NavigationMenuWrapper>
            <NavigationMenu>
              <Li>
                <NavLink to="/">Home</NavLink>
              </Li>
              <Li>
                <NavLink to="/coins">Coins</NavLink>
              </Li>
              <Li>
                <NavLink to="/aboutUs">About</NavLink>
              </Li>
              <NavLink to="/favorites">
                <FavoriteBorderIcon />
              </NavLink>
            </NavigationMenu>
          </NavigationMenuWrapper>
          <div style={{width: "300px"}}>
            <Link to="/profile">
              <ButtonImage src={UserLogo} alt="logo" />
            </Link>
          </div>
        </NavigationBar>
      </Wrapper>
    </>
  );
};

export default Navbar;
