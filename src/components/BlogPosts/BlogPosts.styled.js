import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
`

export const Items = styled.ul``

export const Item = styled.li`
  position: relative;
  padding-bottom: 60px;
  margin-bottom: 60px;
  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 75px;
    height: 75px;
    background-color: #e8603c;
    background-image: url(${props => `${props.type}-icon.png`});
    background-position: center center;
    background-repeat: no-repeat;
    right: 100%;
    margin-right: 10px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    background-image: url('pattern.png');
    height: 13px;
    bottom: 0;
  }
  @media screen and (max-width: 1200px) {
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 940px) {
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
`

export const ItemHeader = styled.div`
  min-height: 300px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`

export const ItemImage = styled.img`
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: inherit;
`

export const ItemVideo = styled.div`
  min-height: 300px;
  iframe {
    min-width: 100%;
    min-height: inherit;
  }
`

export const ItemBody = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export const ItemInfo = styled.div`
  min-width: 140px;
  margin-right: 10px;
  @media screen and (max-width: 940px) {
    min-width: 110px;
    margin-right: 5px;
  }
`

export const ItemInfoTitle = styled.h4`
  font-size: 12px;
  color: #e8603c;
  font-weight: 400;
  font-family: 'Bebas Neue', sans-serif;
  margin-bottom: 2px;
`

export const ItemInfoText = styled.div`
  font-size: 12px;
  color: #bababa;
  text-transform: capitalize;
  margin-bottom: 10px;
`

export const ItemContent = styled.div`
  position: relative;
  ${props => props.type === 'quote' && `
    min-height: 75px;
    background-color: #f6f6f6;
    padding: 15px;
    padding-left: 60px;
    display: flex;
    align-items: center;
    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 30px;
      height: 22px;
      background-image: url('quote-secondary-icon.png');
      background-repeat: no-repeat;
      left: 20px;
    }
  `};
`

export const ItemTitle = styled.h3`
  font-size: 18px;
  color: #e8603c;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  margin-bottom: 6px;
`

export const ItemLink = styled.a`
  display: block;
  margin-bottom: 12px;
  font-size: 12px;
  color: #a0a0a0;
`

export const ItemText = styled.div`
  font-size: 12px;
  color: #414141;
  
`

export const ItemParagraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
