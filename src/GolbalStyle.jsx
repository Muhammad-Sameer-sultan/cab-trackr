import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Eczar', serif;
}

h2{
    font-size: 4rem;
}
h3{
    font-size: 3.5rem;
}
h4{
    font-size: 3rem;
}
h5{
    font-size: 2.5rem;
}
p{
    
    font-size: 1.5rem;
}
`;
