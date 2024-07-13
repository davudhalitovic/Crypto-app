import React from "react"; 
import PortfolioImage from "./images/portfolio.png";
import { PortfolioContent, PortfolioParagraph, PortfolioWrapper, Tittle } from "./design.styled";
const Login = () => {

    return(
        <PortfolioWrapper>
            <PortfolioContent>
                <Tittle>Buy Bitcoin <br/> & Crypto</Tittle>
                <PortfolioParagraph>Sign up today and buy 50+ <br/> cryptotocurrencies in minutes. <br/> Get started with as little as 10$.</PortfolioParagraph>
            </PortfolioContent>
            <div className="Portfolio">
                <img src={PortfolioImage} alt="Portfolio" />
            </div>
        </PortfolioWrapper>
    )
}

export default Login;