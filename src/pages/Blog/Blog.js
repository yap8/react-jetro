import { Aside, BlogNav, BlogPosts, ContentWrapper, PageContent, SectionTitle } from "../../components"

const blogPosts = [
  {
    type: 'text',
    title: 'Jesus  Typography  Wallpaper  Giveaway!',
    image: 'blog-img.png',
    text: `Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.

    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis  ...`,
    date: 'April 15, 2012',
    tags: ['Website', 'Design'],
    comments: 4
  },
  {
    type: 'video',
    title: 'big chungus trailer',
    video: 'some video',
    text: `Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.

    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis  ...`,
    date: 'April 15, 2012',
    tags: ['website', 'design'],
    comments: 4
  },
  {
    type: 'quote',
    text: 'Write anything you want here in this quotable area. Something unique you want people to learn about your website or some cool random fact. Its totally up to you. '
  },
  {
    type: 'link',
    title: 'Some  of  the  best  freebies  on  the  web',
    link: 'www.bestpsdfreebies.com',
    text: 'Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei.'
  }
]

const Blog = () => {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <BlogPosts blogPosts={blogPosts} />
          <BlogNav />
        </PageContent>
        <Aside />
      </ContentWrapper>
    </>
  )
}

export default Blog
