import styled from "styled-components"

const Wrapper = styled.div`
  margin-right: 20px;
  padding: 2px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 230px;
  max-width: 230px;
  @media screen and (max-width: 720px) {
    margin-bottom: 15px;
  }
`

const Img = styled.img`
  
`

const Image = ({ src }) => {
  return (
    <Wrapper>
      <Img src={src} />
    </Wrapper>
  )
}

export default Image
