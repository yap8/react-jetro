import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Wrapper = styled.section`
  margin-bottom: 45px;
`

export const Inner = styled(Container)``

export const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`

export const Item = styled.li`
  max-width: 300px;
  @media screen and (max-width: 940px) {
    max-width: 600px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`

export const ItemHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  @media screen and (max-width: 940px) {
    margin-bottom: 10px;
    justify-content: center;
  }
`

export const ItemIcon = styled.img`
  height: 46px;
  margin-right: 22px;
  @media screen and (max-width: 940px) {
    height: 32px;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  color: #e8663c;
  max-width: 170px;
  line-height: 24px;
  @media screen and (max-width: 940px) {
    font-size: 20px;
    max-width: 100%;
  }
  @media screen and (max-width: 720px) {
    text-align: center;
  }
`

export const ItemBody = styled.div``

export const ItemText = styled.div`
  font-size: 12px;
  color: #414141;
  margin-bottom: 20px;
  @media screen and (max-width: 940px) {
    text-align: center;
  }
`

export const ItemButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  background-color: #e8663c;
  padding: 0 13px;
  color: #fff;
  font-size: 12px;
  font-family: 'Bebas Neue', sans-serif;
  @media screen and (max-width: 940px) {
    display: flex;
  }
`
