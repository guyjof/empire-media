import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
    margin: 0;
    color:${({ theme }) => theme.colors.font}
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100%;
}
`

export default GlobalStyles