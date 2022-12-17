import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-light-red: #f50000;
  --color-deep-red: #8F1919;
  --color-light-gray: #28292B;
  --color-deep-gray: #1D1E1F;
}
@font-face {
   font-family: 'bold';
   src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
}
@font-face {
  font-family: 'nomal';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
}
@font-face {
    font-family: 'light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Th.woff2') format('woff2');
}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family:'nomal';
    background-color: var(--color-deep-gray);

  }

  body {
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 16px;
  }
`;

export default GlobalStyle;
