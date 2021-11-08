import styled from "styled-components"

const Wrapper = styled.div``

const TextContent = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default TextContent
