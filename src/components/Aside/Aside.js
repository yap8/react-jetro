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
  { img: 'gallery/1.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/2.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/3.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/4.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/5.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/6.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/7.png', color: '#f3af9d', borderColor: '#e8603c' },
  { img: 'gallery/8.png', color: '#f3af9d', borderColor: '#e8603c' }
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
              <CategoryItem key={category.name}>
                <CategoryLink to={'category/' + category.name.replace(/\s+/g, '-').toLowerCase()}>{category.name} ({category.amount})</CategoryLink>
              </CategoryItem>
            ))}
          </Categories>
        </Section>
        <Section>
          <Title>Photo Gallery</Title>
          <Photos>
            {photos.map(photo => (
              <PhotoItem key={photo.img}>
                <PhotoLink href={`/react-jetro/${photo.img}`} color={photo.color} borderColor={photo.borderColor}>
                  <Photo src={`/react-jetro/${photo.img}`} />
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
