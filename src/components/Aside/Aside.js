import { Inner, Wrapper, Section, Title, Text, Photos, PhotoItem, PhotoLink, Photo, Categories, CategoryItem, CategoryLink } from "./Aside.styled"

const categories = [
  { name: 'video', amount: 3 },
  { name: 'sports', amount: 5 },
  { name: 'media', amount: 2 },
  { name: 'entertainment', amount: 7 },
  { name: 'life', amount: 4 },
  { name: 'super cool stuff', amount: 8 }
]

const photos = [
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' },
  { img: '', color: '#f3af9d', borderColor: '#e8603c' }
]

const Aside = () => {
  return (
    <Wrapper>
      <Inner>
        <Section>
          <Title>About jetro</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum. </Text>
        </Section>
        <Section>
          <Title>Categories</Title>
          <Categories>
            {categories.map(category => (
              <CategoryItem>
                <CategoryLink>{category.name} ({category.amount})</CategoryLink>
              </CategoryItem>
            ))}
          </Categories>
        </Section>
        <Section>
          <Title>Photo Gallery</Title>
          <Photos>
            {photos.map(photo => (
              <PhotoItem>
                <PhotoLink color={photo.color} borderColor={photo.borderColor}>
                  <Photo />
                </PhotoLink>
              </PhotoItem>
            ))}
          </Photos>
        </Section>
      </Inner>
    </Wrapper>
  )
}

export default Aside
