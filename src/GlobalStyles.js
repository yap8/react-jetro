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

export const Section = styled.section`
  
`

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  width: 90%;
`

export const SectionExtended = styled(Section)`
  overflow: hidden;

  ${Container} {
    position: relative;
    &::before,
    &::after {
      content: '';
      height: 100%;
      width: 100%;
      background-color: #f3b29d;
      position: absolute;
      top: 0;
      @media screen and (max-width: 940px) {
        display: none;
      }
    }
    &::before {
      right: 100%;
      margin-right: 10px;
    }
    &::after {
      left: 100%;
      margin-left: 10px;
    }
  }
`

export default GlobalStyle
