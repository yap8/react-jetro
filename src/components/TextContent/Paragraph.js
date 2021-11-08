import styled from "styled-components"

const Wrapper = styled.p`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

const Paragraph = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Paragraph
