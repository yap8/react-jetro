import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`
export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  width: 90%;
`

export default GlobalStyle
