import { Carousel, Features, SectionTitle } from "../../components"

const carouselItems = [
  {
    img: 'carousel-image.png',
    title: 'Slide one',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  },
  {
    img: 'carousel-image.png',
    title: 'Slide two',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  },
  {
    img: 'carousel-image.png',
    title: 'Slide three',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  },
  {
    img: 'carousel-image.png',
    title: 'Slide four',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  },
  {
    img: 'carousel-image.png',
    title: 'Slide five',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  },
  {
    img: 'carousel-image.png',
    title: 'Slide six',
    text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
  }
]

const Home = () => {
  return (
    <>
      <SectionTitle hidden>Home</SectionTitle>
      <Carousel carouselItems={carouselItems} />
      <Features />
    </>
  )
}

export default Home
