import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Sansita One";
    src: url('../src/assets/font/sansitaOne/SansitaOne.ttf')
}

@font-face {
    font-family: "Libre Barcode 128";
    src: url('../src/assets/font/libreBarcode/LibreBarcode128-Regular.ttf')
}

* {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.bg};
}

img {
    margin-bottom: 1rem;
}

div {
    text-align: center;
}

h1 {
    font-family: ${({ theme }) => theme.fonts.sansita};
    color: ${({ theme }) => theme.colors.accentPink};
    font-size: 2rem;
    line-height: 32.28px;
    font-weight: 400;
    margin-bottom: 1rem;
}

h2,h3,h4,h5,h6,p {
    font-family: ${({ theme }) => theme.fonts.fira};
    color: rgb(255,255,255);
}

h2 {
    font-size: 1.37rem;
    line-height: 26.4px;
    font-style: italic;
    font-weight: 400;
}
`

export default GlobalStyles