import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Titles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    font-size: 1em;
    *{
        
    }
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 150px;
    p{
        font-size: 0.8rem;
        font-weight: bold;
        font-style: italic
    }
   `
//    export const PgnBtn = styled.button`
//     width: 30px;
//     height: 30px;
//     border-radius: 5px;
//     border: 1px solid #000;
//     margin: 5px;
//     cursor: pointer;
//     font-size: 0.8rem;
//     font-weight: bold;
//     font-style: italic;
//     margin-top: 2rem;
//     :active{
//         background: transparent;
//     }
//    `