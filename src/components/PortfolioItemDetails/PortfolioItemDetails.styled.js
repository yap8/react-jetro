import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Wrapper = styled.section`
  margin-bottom: 40px;
`

export const Inner = styled(Container)``

export const HeroImageWrapper = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`

export const HeroImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export const Text = styled.div`
  font-size: 12px;
  color: #414141;

`
