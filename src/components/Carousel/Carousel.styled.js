import styled from "styled-components"
import { Container } from "../../GlobalStyles"

export const Wrapper = styled.section`

`

export const Inner = styled(Container)``

export const CarouselItemsWrapper = styled.div`
  margin-bottom: 17px;
  @media screen and (max-width: 940px) {
    margin-bottom: 30px;
  }
`

export const CarouselImage = styled.img`

`

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  background: none;
  background-image: url('arrow.png');
  background-size: cover;
  border: 0;
  z-index: 99;
  height: 52px;
  width: 36px;
  cursor: pointer;
  ${props => props.next ? `
    right: 26px;
    transform: translateY(-50%) rotate(180deg);
  ` : `
    left: 26px;
  `}
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const CarouselContent = styled.div`
  max-width: 413px;
  position: absolute;
  left: 36px;
  bottom: 32px;
  background-color: rgba(232, 102, 60, .8);
  padding: 22px 19px ;
  width: 80%;
  @media screen and (max-width: 940px) {
    left: 50%;
    transform: translateX(-50%);
  }
`

export const CarouselTitle = styled.h2`
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  margin-bottom: 15px;
`

export const CarouselText = styled.div`
  font-size: 12px;
  color: #fff;
`

export const CarouselThumbsWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 940px) {
    display: none;
  }
`

export const CarouselThumbImage = styled.img`
  position: absolute;
  height: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: filter .2s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(.5);
  }
`
