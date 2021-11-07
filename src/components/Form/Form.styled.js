import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 180px;
  ${props => props.form && `max-width: 460px;`}
`

export const Text = styled.div`
  font-size: 12px;
  color: #414141;
  margin-bottom: 8px;
`

export const Paragraph = styled.p`
  ${props => props.highlighted && `color: #e8603c; font-weight: bold;`}
`

export const Link = styled.a`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`

export const Group = styled.div`
  width: 100%;
`

export const TextField = styled.input`
  max-width: 220px;
  width: 100%;
  height: 35px;
  padding: 11px;
  border: 1px solid #e8603c;
  border-radius: 1px;
  color: #333;
  font-family: 'Bebas Neue', sans-serif;
  margin-bottom: 10px;
  &::placeholder {
    color: #e8603c;
  }
  @media screen and (max-width: 940px) {
    max-width: 100%;
  }
`

export const TextArea = styled(TextField)`
  resize: none;
  min-height: 205px;
  max-width: 100%;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  border: 0;
  background-color: #e8663c;
  padding: 0 13px;
  color: #fff;
  font-size: 12px;
  font-family: 'Bebas Neue', sans-serif;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`
