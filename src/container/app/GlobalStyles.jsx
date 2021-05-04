import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap');

    body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        transition: all 300ms ease;
    }
    a{
        text-decoration: none:
        color: black;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: bold;
    }
    h1{
        font-size:3rem;
        text-transform: uppercase;
    }
    h2{
        font-size:2.4rem;
    }
    h3{
        font-size:1.6rem;
    }
    h4{
        font-size:1.2rem;
    }
    h5{
        font-size:1rem;
    }
    h6{
        font-size:0.8rem;
    }
    p{
        font-weight:400;
        font-size: 1rem;
    }
    ul{
        list-style-type:none;
    }
    .App{
        min-height:100vh;
    }
    .boton{
        font-weight: bold;
        font-size: 1rem;
        width: 60%;
        padding: 2%;
        border-radius: 35px;
        cursor: pointer;
    }
`;
