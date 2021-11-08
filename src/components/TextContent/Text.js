import styled from "styled-components"

const Wrapper = styled.div`
  font-size: 12px;
  color: #414141;
  line-height: 18px;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (max-width: 720px) {
    margin-bottom: 15px;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`

const Text = ({ children, quote }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Text
