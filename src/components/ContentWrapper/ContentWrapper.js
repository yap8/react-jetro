import { Wrapper, Inner } from "./ContentWrapper.styled"

const ContentWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default ContentWrapper
