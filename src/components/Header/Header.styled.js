import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Wrapper = styled.header`
  position: relative;
`

export const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  
`

export const Logo = styled(Link)`
  
`

export const LogoText = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: #e8603c;
  :last-child {
    color: #f3af9d;
  }
`

export const MenuToggle = styled.button`
  display: none;
  @media screen and (max-width: 940px) {
    background: transparent;
    border: 0;
    display: block;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 940px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 78px;
    left: ${props => props.isClicked ? 0 : '-100%'};
    opacity: 1;
    transition: all .5s ease;
    background-color: #fff;
  }
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 28px;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`

export const NavLink = styled(Link)`
  color: #b9b9b9;
  text-transform: uppercase;
  font-family: 'Bebas Neue', sans-serif;
  &:hover {
    color: #e8603c;
  }
  @media screen and (max-width: 940px) {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
