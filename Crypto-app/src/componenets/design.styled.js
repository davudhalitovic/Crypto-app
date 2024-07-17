import {styled} from 'styled-components';

export const Wrapper = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`;
// Navigation bar
export const NavigationBar = styled.nav`
  background-color: #22364F;
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
`
// Portfolio page
export const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
`
export const PortfolioContent = styled.div`
    margin-bottom: 60px;
`
export const Tittle = styled.h1`
    color: black;
    font-size: 55px;
    font-weight: normal;
`
export const PortfolioParagraph = styled.p`
    color: black;
    font-size: 25px;
    font-weight: normal;
    margin-top: -30px;
    font-family: 'Times New Roman', Times, serif;
`
// Footer
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #8dc6ff;
    color: black;
    height: 200px;
    width: 100%;
    position: absolute;
    margin-top: 100%;
`
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
    font-family: 'Roboto', sans-serif;

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
`
export const FooterParagraph = styled.p`
    color: black;
    font-size: 15px;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    p {
      text-align: center;
    }
`
// About us
export const AboutUsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-top: 60px;
    font-family: 'Roboto', sans-serif;
`
export const Card = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    width: 250px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 15px;
    margin: 25px;
    &:hover {
        transform: scale(1.08);
        transition: all 300ms ease;
        cursor: pointer;
    }
    h1{
      color: black;
      font-size: 25px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }
    h4{
      color: gray;
      font-size: 15px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }
    p{
      color: gray;
      font-size: 15px;
      font-weight: normal;
      font-family: 'Roboto', sans-serif;
      margin-top: 20px;
    }
`
export const AboutUsLogo = styled.img`
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: none;
    border-radius: 20px;
`
export const AvatarLogo  = styled.img`
    height: 80px;
    width: 80px;
    background-color: transparent;
    border: none;
    border-radius: 20px;
`