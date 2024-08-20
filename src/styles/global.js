import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  h1, p {
    font-family: ${({ theme }) => theme.FONTS.Primary};
  }

  button, input, textarea {
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-weight: 500;
    border-radius: .5rem;
    border: none;
    background: none;
    transition: filter 0.2s;

  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }


  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ul li{
    text-decoration: none;
    list-style: none;
  }

  img {
    max-width: 100%;    
  }

`;
