import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { PortfolioItemDetails, SectionTitle, Works } from "../../components"

const PortfolioItem = () => {
  const { title } = useParams()

  const [works, setWorks] = useState([])
  const [currentWork, setCurrentWork] = useState({})

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(data => {
        setWorks(data.portfolioItems)
        setCurrentWork(data.portfolioItems.find(item => item.title.replace(/\s+/g, '-').toLowerCase() === title))
      })
  }, [title])

  return (
    <>
      <SectionTitle>{currentWork.title}</SectionTitle>
      <PortfolioItemDetails item={currentWork} />
      <Works title="related items" works={works.filter((item, index) => index < 4)} />
    </>
  )
}

export default PortfolioItem
