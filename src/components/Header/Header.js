import { Inner, Logo, LogoText, MenuToggle, NavItem, NavLink, NavMenu, Wrapper } from "./Header.styled"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react"
import { IconContext } from "react-icons/lib"

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <IconContext.Provider value={{ color: '#e8603c' }}>
      <Wrapper>
        <Inner>
          <Logo to="/">
            <LogoText>Jet</LogoText>
            <LogoText>Ro</LogoText>
          </Logo>
          <MenuToggle onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? <FaTimes size="32px" /> : <FaBars size="32px" />}
          </MenuToggle>
          <NavMenu onClick={() => setIsClicked(!isClicked)} isClicked={isClicked}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact us</NavLink>
            </NavItem>
          </NavMenu>
        </Inner>
      </Wrapper>
    </IconContext.Provider>
  )
}

export default Header
