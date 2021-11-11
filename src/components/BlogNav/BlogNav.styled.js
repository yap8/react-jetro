import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.section``

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`

export const ItemLink = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14px;
  color: #fff;
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.disabled ? '#f3b29d' : '#e8663c'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`
