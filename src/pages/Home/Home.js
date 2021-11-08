import { useEffect, useState } from "react"
import { Carousel, Features, SectionTitle, Works } from "../../components"

const Home = () => {
  const [works, setWorks] = useState([])
  const [carouselItems, setCarouselItems] = useState([])

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(data => {
        setWorks(data.portfolioItems.filter((item, index) => index < 4))
        setCarouselItems(data.carouselItems)
      })

  }, [])

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
