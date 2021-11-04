import { CarouselContent, CarouselImage, CarouselItemsWrapper, CarouselText, CarouselThumbImage, CarouselThumbsWrapper, CarouselTitle, Inner, Wrapper } from "./Carousel.styled"
import { Swiper as CarouselItems, SwiperSlide as CarouselItem, Swiper as CarouselThumbs, SwiperSlide as CarouselThumb } from "swiper/react"
import SwiperCore, { Navigation, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
import { useState } from "react"

SwiperCore.use([Navigation, Thumbs])

const Carousel = ({ carouselItems }) => {
  const [thumbs, setThumbs] = useState(null)

  return (
    <Wrapper>
      <Inner>
        <CarouselItemsWrapper>
          <CarouselItems
            wrapperTag="ul"
            thumbs={{ swiper: thumbs }}
            loop
            navigation
          >
            {carouselItems.map(carouselItem => (
              <CarouselItem key={carouselItem.title} tag="li" style={{ height: 401 }}>
                <CarouselImage src={carouselItem.img} />
                <CarouselContent>
                  <CarouselTitle>{carouselItem.title}</CarouselTitle>
                  <CarouselText>{carouselItem.text}</CarouselText>
                </CarouselContent>
              </CarouselItem>
            ))}
          </CarouselItems>
        </CarouselItemsWrapper>
        <CarouselThumbsWrapper>
          <CarouselThumbs
            watchSlidesProgress
            slidesPerView={6}
            spaceBetween={20}
            onSwiper={setThumbs}
          >
            {carouselItems.map(carouselItem => (
              <CarouselThumb style={{ height: 120, width: 140, overflow: 'hidden' }}>
                <CarouselThumbImage src={carouselItem.img} />
              </CarouselThumb>
            ))}
          </CarouselThumbs>
        </CarouselThumbsWrapper>
      </Inner>
    </Wrapper>
  )
}

export default Carousel
