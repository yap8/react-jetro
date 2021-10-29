import { Wrapper, Inner, Title } from './SectionTitle.styled'

const SectionTitle = ({ children, hidden }) => {
  return (
    <Wrapper hidden={hidden}>
      <Inner>
        <Title>{children}</Title>
      </Inner>
    </Wrapper>
  )
}

export default SectionTitle
