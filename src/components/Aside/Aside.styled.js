import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.aside`
  @media screen and (max-width: 940px) {
    display: none;
  }
`

export const Inner = styled.div`
  width: 220px;
`

export const Section = styled.section`
  margin-bottom: 35px;
`

export const Title = styled.h3`
  font-size: 14px;
  color: #e8603c;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  line-height: 1;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    background-image: url('pattern.png');
    top: 0;
    width: 100%;
    height: 100%;
    margin-left: 15px;
  }
`

export const Text = styled.div`
  font-size: 12px;
  color: #464646;
`

export const Categories = styled.ul`
`

export const CategoryItem = styled.li`
  line-height: 1;
`

export const CategoryLink = styled(Link)`
  font-size: 12px;
  color: #464646;
  text-transform: capitalize;
  &:hover {
    text-decoration: underline;
  }
`

export const Photos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const PhotoItem = styled.li`
  margin-bottom: 6px;
`

export const PhotoLink = styled.a`
  display: block;
  height: 50px;
  width: 50px;
  background-color: ${props => props.color || '#f3af9d'};
  border: 1px solid ${props => props.borderColor || '#e8603c'};
  position: relative;
`

export const Photo = styled.img`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
