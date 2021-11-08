import styled from "styled-components"

const Wrapper = styled.div`
  font-size: 12px;
  color: #414141;
  line-height: 18px;
  position: relative;
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

const Quote = styled.div`
  padding-left: 77px;
  font-style: italic;
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 95%;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #e8663c;
    position: absolute;
  }
  @media screen and (max-width: 940px) {
    padding-left: 20px;
    &::before {
      left: 0;
    }
  }
`

const Text = ({ children, quote }) => {
  return (
    <Wrapper>
      {quote ? (
        <Quote>
          {children}
        </Quote>
      ) : (
        children
      )}
    </Wrapper>
  )
}

export default Text
