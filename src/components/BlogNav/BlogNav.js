import { Items, Wrapper, Item, ItemLink } from "./BlogNav.styled"

const BlogNav = () => {
  return (
    <Wrapper>
      <Items>
        <Item>
          <ItemLink>1</ItemLink>
        </Item>
        <Item>
          <ItemLink disabled>2</ItemLink>
        </Item>
        <Item>
          <ItemLink disabled>3</ItemLink>
        </Item>
      </Items>
    </Wrapper>
  )
}

export default BlogNav
