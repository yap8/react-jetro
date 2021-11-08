import React from 'react'
import { Wrapper, Inner, HeroImage, Text, HeroImageWrapper } from './PortfolioItemDetails.styled'

const PortfolioItemDetails = ({ item }) => {
  return (
    <Wrapper>
      <Inner>
        <HeroImageWrapper>
          <HeroImage src={'http://localhost:3000/' + item.img} />
        </HeroImageWrapper>
        <Text>{item.text}</Text>
      </Inner>
    </Wrapper>
  )
}

export default PortfolioItemDetails
