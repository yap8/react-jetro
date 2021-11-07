import { useEffect, useState } from "react"
import { CategoryFilter, SectionTitle, Works } from "../../components"

const works = [
  { img: 'works/work-1.png', title: 'Character design', category: 'photoshop', date: 'June 15, 2012' },
  { img: 'works/work-2.png', title: 'Brochure Design', category: 'print', date: 'June 15, 2012' },
  { img: 'works/work-3.png', title: 'Social Media Buttons', category: 'web', date: 'June 15, 2012' },
  { img: 'works/work-4.png', title: 'Wordpress theme', category: 'wordpress', date: 'June 15, 2012' },
  { img: 'works/work-5.png', title: 'Poster', category: 'print', date: 'June 15, 2012' },
  { img: 'works/work-6.png', title: 'Web Graphic element', category: 'web', date: 'June 15, 2012' },
  { img: 'works/work-7.png', title: 'Brochure design', category: 'photoshop', date: 'June 15, 2012' },
  { img: 'works/work-8.png', title: 'Big chungus', category: '', date: 'June 15, 2012' },
  { img: 'works/work-9.png', title: 'cartoon characters', category: 'photoshop', date: 'June 15, 2012' },
  { img: 'works/work-10.png', title: 'Sticker design', category: 'photoshop', date: 'June 15, 2012' },
  { img: 'works/work-11.png', title: 'Business cards', category: 'print', date: 'June 15, 2012' },
  { img: 'works/work-12.png', title: 'Slider plugin', category: 'web', date: 'June 15, 2012' },
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
