import React from "react";
import { FooterWrapper, FooterContent, FooterParagraph,  } from "./design.styled";

const Footer = () => {

    return(
        <FooterWrapper>
            <div>
            <FooterContent>
                <a href="#">Website</a>
                <a href="#">Users</a>
                <a href="#">Coins</a>
            </FooterContent>
            <FooterParagraph>
                <p>Crypto app made by: Eldar Catovic, Davud Halitovic, Dzenis Fejzovic, Enes Korac;</p>
                <p>Copyright © 2024</p>
            </FooterParagraph>
            </div>
        </FooterWrapper>
    )
}

export default Footer;