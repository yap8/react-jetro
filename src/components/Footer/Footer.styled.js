import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const Wrapper = styled.footer`
  
`

export const Inner = styled(Container)`
  padding: 35px;
  height: 263px;
  background-color: #e8663c;
  display: flex;
  justify-content: space-between;
`

export const Section = styled.div`
  width: 30%;
`

export const Title = styled.h3`
  font-size: 20px;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  margin-bottom: 18px;
`
export const Text = styled.div`
  font-size: 12px;
  color: #fff;
`

export const Paragraph = styled.p`
  margin-bottom: ${props => props.nomargin ? 0 : '14px'};
`

export const ParagraphLink = styled.a`
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`

export const Tweets = styled.ul`

`

export const Tweet = styled.li`
  
`

export const TweetLink = styled.a`
  color: #f3b29d;
  &:hover {
    text-decoration: underline;
  }
`

export const Social = styled.ul`
  display: flex;
`

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`

export const SocialLink = styled.a`

`

export const SocialIcon = styled.img`

`
