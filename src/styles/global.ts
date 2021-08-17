import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #030518;
    --highlight: #C53030;
    --background: #f1f1f1;
    --dark: #1a1a1a;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 4rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--dark);
  }
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p, a {
    font-size: 1.2rem;
    line-height: var(--small);
    color: #646A84;
  }
  a {
    color: var(--highlight);
  }
`;

export default GlobalStyles;
