import { createGlobalStyle } from 'styled-components'

export const colors = {
  roseColor: '#E66767',
  creamColor: '#FFEBD9',
  whiteColor: '#FFF8F2',
  cardColor: '#FFFFFF'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }

`
export default GlobalStyle
