import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: "Helvetica Neue";
    background: #fff;
  }

  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MainContainer = styled.div`
  width: 375px;
  height: 812px;
  background: #292929;
  display: grid;
  justify-items: center;
  align-items: center;
`;

/* ********** GENERIC STYLES  ********** */

export const H1 = styled.h1` 
  font-size: 26px; 
  font-weight: 500; 
  color: #fff; 
  line-height: 42px;
  height: 42px;
  position: relative;
  :before {
    position: absolute;
    display: inline;
    content: "";
    width: 10px;
    height: 42px;
    top: 0;
    left: 0;
    background-color: #FFCE00;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`
export const P = styled.p` font-size: 18px; color: #fff; font-weight: 200; line-height: 24px;` 
export const Span = styled.span` font-size: 17px; color: #fff; font-weight: 200;`

