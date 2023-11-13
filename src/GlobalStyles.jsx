import { createGlobalStyle } from 'styled-components';

export const primaryColor = "#000000";
export const magentaColor1 = "#5E0000";
export const magentaColor2 = "#964040";
export const magentaColor3 = "#C26D6D";
export const magentaColor4 = "#FFD3D3";
export const fontPrimary = 'Montserrat, sans-serif';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  scroll-behavior: smooth;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
  line-height: 1.4;
  ::-webkit-scrollbar {
    width: 5px; 
  }
  ::-webkit-scrollbar-thumb {
      background-color: #5E0000;
  }
  ::-webkit-scrollbar-track {
      background-color: #b3b3b3; 
  }
}

  /* 
  font-family: 'Belanosima', sans-serif;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Mono', monospace;
  */
  
`;

export default GlobalStyle;