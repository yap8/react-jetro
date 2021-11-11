import { Aside, BlogNav, BlogPosts, ContentWrapper, PageContent, SectionTitle } from "../../components"

const Blog = () => {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <BlogPosts />
          <BlogNav />
        </PageContent>
        <Aside />
      </ContentWrapper>
    </>
  )
}

export default Blog
