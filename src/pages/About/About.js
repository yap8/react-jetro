import { Aside, SectionTitle, ContentWrapper, PageContent, Alert } from "../../components"

const About = () => {
  return (
    <>
      <SectionTitle>About us</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <Alert variant="green">Alert Text</Alert>
          <Alert variant="red">Alert Text</Alert>
          <Alert variant="yellow">Alert Text</Alert>
          <Alert variant="blue">Alert Text</Alert>
        </PageContent>
        <Aside />
      </ContentWrapper>
    </>
  )
}

export default About
