import { useEffect, useState } from "react"
import { useParams, useRouteMatch } from "react-router"
import { SectionTitle, Works } from "../../components"

const PortfolioItem = () => {
  const [works, setWorks] = useState([])
  const [currentWork, setCurrentWork] = useState({})

  useEffect(() => {
    fetch('../db.json')
      .then(res => res.json())
      .then(data => {
        setWorks(data.portfolioItems)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <SectionTitle>{currentWork.title}</SectionTitle>
      <Works title="related items" works={works.filter((item, index) => index < 4)} />
    </>
  )
}

export default PortfolioItem
