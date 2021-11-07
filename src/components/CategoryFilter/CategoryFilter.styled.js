import styled from "styled-components"
import { Container } from "../../GlobalStyles"

export const Wrapper = styled.section``

export const Inner = styled(Container)``

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li``

export const Button = styled.button`
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  padding: 0 13px;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#b9b9b9'};
  font-size: 14px;
  background-color: ${props => props.active ? '#e8663c' : 'transparent'};
`
