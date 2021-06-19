import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oxygen', sans-serif;
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

export const Container = styled.div`
  width: 375px;
  height: 812px;
  background: #292929;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;