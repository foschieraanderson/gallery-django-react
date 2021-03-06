import { createGlobalStyle } from 'styled-components';

import "react-circular-progressbar/dist/styles.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
    --text-header: #F2F2F2;

    --background: #f0f2f5;
    --shape: #FFFFFF;

  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  html, body, #root {
    height: 100%;
  }

`