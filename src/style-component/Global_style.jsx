import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}



  html{
    /* font-family: 'Courier New', Courier, monospace; */
     font-family: "Noto Sans CJK KR"; 
  }

  a, button {
    cursor: pointer;
    color: white;
    background-color: #D94D4D;
  }

`;

export default GlobalStyle;
