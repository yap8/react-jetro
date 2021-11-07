import { Inner, Wrapper, Items, Item, Button } from "./CategoryFilter.styled"

const CategoryFilter = ({ categories, currentFilter, setCurrentFilter }) => {
  return (
    <Wrapper>
      <Inner>
        <Items>
          {categories.map(category => (
            <Item>
              <Button active={currentFilter === category} onClick={() => setCurrentFilter(category)}>{category}</Button>
            </Item>
          ))}
        </Items>
      </Inner>
    </Wrapper>
  )
}

export default CategoryFilter
