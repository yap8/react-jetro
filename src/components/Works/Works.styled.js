import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Wrapper = styled.section`

`

export const Inner = styled(Container)``

export const Title = styled.h2`
  font-size: 18px;
  color: #e8603c;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 940px) {
    text-align: center;
    font-size: 28px;
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url('pattern.png');
    top: 0;
    width: 100%;
    height: 100%;
    margin-left: 21px;
    @media screen and (max-width: 940px) {
      display: none;
    }
  }
`

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 940px) {
    justify-content: space-around;
  }
`

export const Item = styled.li`
  width: 100%;
  max-width: 200px;
  margin-bottom: 40px;
  @media screen and (max-width: 940px) {
    max-width: 300px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 720px) {
    max-width: 360px;
  }
`

export const ItemImageWrapper = styled.div`
  height: 183px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 940px) {
    height: 200px;
  }
  @media screen and (max-width: 720px) {
    height: 240px;
  }
`

export const ItemImage = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  transition: filter .2s ease;
`

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  &:hover {
    ${ItemImage} {
      filter: brightness(.3);
    }
  }
`

export const ItemInfo = styled.div`
  padding: 13px;
  border: 1px solid #b9b9b9;
  border-top: 0;
`
export const ItemTitle = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  color: #b9b9b9;
`

export const ItemDate = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 11px;
  color: #e8663c;
`
