import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: rgb(34,193,195);
  background: linear-gradient(347deg, rgba(34,193,195,1) 0%, rgba(189,91,186,1) 42%, rgba(198,104,167,1) 46%, rgba(253,187,45,1) 72%) no-repeat; 
  font-family: sans-serif;
  margin: 200px; 
  text-align: center;
}

`;
