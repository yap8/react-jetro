import styled from "styled-components";
import { Container, SectionExtended } from "../../GlobalStyles";

export const Wrapper = styled(SectionExtended)`
  width: 100%;
  display: block;
  z-index: -1;
  position: ${props => props.hidden ? 'absolute' : 'static'};
  margin-bottom: 20px;
`

export const Inner = styled(Container)`
  background-color: #e8603c;
  height: 61px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
`
