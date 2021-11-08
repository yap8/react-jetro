import { Wrapper, Inner, Title, Items, Item, ItemImage, ItemTitle, ItemDate, ItemInfo, ItemLink, ItemImageWrapper } from "./Works.styled"

const Works = ({ title, works }) => {
  return (
    <Wrapper>
      <Inner>
        <Title>{title}</Title>
        <Items>
          {works && works.map(work => (
            <Item key={work.title}>
              <ItemLink to={'/portfolio/' + work.title.replace(/\s+/g, '-').toLowerCase()}>
                <ItemImageWrapper>
                  <ItemImage src={work.img} />
                </ItemImageWrapper>
                <ItemInfo>
                  <ItemTitle>{work.title}</ItemTitle>
                  <ItemDate>{work.date}</ItemDate>
                </ItemInfo>
              </ItemLink>
            </Item>
          ))}
        </Items>
      </Inner>
    </Wrapper>
  )
}

export default Works
