import { Carousel, Features, SectionTitle, Works } from "../../components"

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

const works = [
  { img: 'works/work-1.png', title: 'Character design', date: 'June 15, 2012' },
  { img: 'works/work-2.png', title: 'Brochure Design', date: 'June 15, 2012' },
  { img: 'works/work-3.png', title: 'Social Media Buttons', date: 'June 15, 2012' },
  { img: 'works/work-4.png', title: '10 Amazing Websites', date: 'June 15, 2012' },
]

const Home = () => {
  return (
    <>
      <SectionTitle hidden>Home</SectionTitle>
      <Carousel carouselItems={carouselItems} />
      <Features />
      <Works works={works} title="recent works" />
    </>
  )
}

export default Home
