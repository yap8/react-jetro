import { Wrapper, Inner, Text } from "./Alert.styled"

const Alert = ({ children, variant }) => {


  return (
    <Wrapper variant={variant}>
      <Inner>
        <Text>{children}</Text>
      </Inner>
    </Wrapper>
  )
}

export default Alert
