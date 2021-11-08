import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Wrapper = styled.section`
  margin-bottom: 40px;
  @media screen and (max-width: 940px) {
    margin-bottom: 20px;
  }
`

export const Inner = styled(Container)``

export const HeroImageWrapper = styled.div`
  min-height: 400px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 940px) {
    min-height: 320px;
  }
  @media screen and (max-width: 720px) {
    min-height: 220px;
  }
`

export const HeroImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 400px;
`

export const Text = styled.div`
  font-size: 12px;
  color: #414141;

`
