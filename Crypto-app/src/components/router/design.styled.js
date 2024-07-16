import { styled } from "styled-components";

export const Wrapper = styled.div`
  font-size: 16px;
`;
// Navigation bar
export const NavigationBar = styled.nav`
  background-color: #22364f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 80px;
`;

export const NavigationLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Image = styled.img`
  height: 40px;
  margin-right: 10px;
  background-color: transparent;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const NavigationMenuWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
  width: 450px;
  background-color: #132743;
`;

export const NavigationMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
`;

export const Li = styled.li`
  margin: 0 50px;
  a {
    color: #9ba6a5;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      color: white;
    }
  }
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    transform: scale(1.07);
    transition: all 300ms ease;
    cursor: pointer;
  }
`;
export const ButtonImage = styled.img`
  height: 35px;
  width: 40px;
  margin-right: 15px;
  background-color: transparent;
  border: none;
`;
// Portfolio page
export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;
export const PortfolioContent = styled.div`
  margin-bottom: 60px;
`;
export const Tittle = styled.h1`
  color: black;
  font-size: 55px;
  font-weight: normal;
`;
export const PortfolioParagraph = styled.p`
  color: black;
  font-size: 25px;
  font-weight: normal;
  margin-top: -30px;
  font-family: "Times New Roman", Times, serif;
`;
// Footer
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  background-color: #8dc6ff;
  color: black;
  height: 200px;
  width: 100%;
  position: absolute;
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 4px solid black;
  border-radius: 15px;
  width: 600px;
  height: 50px;
  font-family: "Roboto", sans-serif;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    margin: 0 20px;
    &:hover {
      color: white;
    }
  }
`;
export const FooterParagraph = styled.p`
  color: black;
  font-size: 15px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  p {
    text-align: center;
  }
`;

export const ImageHolder = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 400px;
`;

export const ImageTwo = styled.img`
  width: 100%;
`;
