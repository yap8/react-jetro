import { useEffect, useState } from "react"
import { CategoryFilter, SectionTitle, Works } from "../../components"

const Portfolio = () => {
  const [works, setWorks] = useState([])
  const [currentWorks, setCurrentWorks] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(data => setWorks(data.portfolioItems))
  }, [])

  useEffect(() => {
    if (currentFilter === 'all') return setCurrentWorks(works)

    setCurrentWorks(works.filter(work => work.category === currentFilter))
  }, [works, currentFilter])

  return (
    <>
      <SectionTitle>Portfolio</SectionTitle>
      <CategoryFilter
        categories={['all', 'photoshop', 'print', 'web', 'wordpress']}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <Works works={currentWorks} />
    </>
  )
}

export default Portfolio
