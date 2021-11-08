import styled from "styled-components";

const colors = {
  green: {
    color: '#98c601',
    backgroundColor: '#effeb9'
  },
  red: {
    color: '#eb5439',
    backgroundColor: '#fbcbc1'
  },
  yellow: {
    color: '#fab418',
    backgroundColor: '#ffe9ad'
  },
  blue: {
    color: '#4d8fcb',
    backgroundColor: '#d1e4f3'
  }
}

export const Wrapper = styled.div`
  background-color: ${props => colors[props.variant].backgroundColor};
  color: ${props => colors[props.variant].color};
  border: 1px solid ${props => colors[props.variant.color]};
  margin-bottom: 20px;
`

export const Inner = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
`

export const Text = styled.div``
