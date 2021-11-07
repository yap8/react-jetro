import { useEffect, useState } from "react"
import { CategoryFilter, SectionTitle, Works } from "../../components"

const works = [
  { img: 'work-1.png', title: 'Character design', category: 'photoshop', date: 'June 15, 2012' },
  { img: 'work-2.png', title: 'Brochure Design', category: 'print', date: 'June 15, 2012' },
  { img: 'work-3.png', title: 'Social Media Buttons', category: 'web', date: 'June 15, 2012' },
  { img: 'work-4.png', title: 'Wordpress theme', category: 'wordpress', date: 'June 15, 2012' },
]

const Portfolio = () => {
  const [currentWorks, setCurrentWorks] = useState(works)
  const [currentFilter, setCurrentFilter] = useState('all')

  useEffect(() => {
    if (currentFilter === 'all') return setCurrentWorks(works)
    setCurrentWorks(works.filter(work => work.category === currentFilter))
  }, [currentWorks, currentFilter])

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
