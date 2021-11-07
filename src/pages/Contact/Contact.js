import { Aside, ContentWrapper, Form, Map, PageContent, SectionTitle } from "../../components"

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact us</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <Map />
          <Form />
        </PageContent>
        <Aside />
      </ContentWrapper>
    </>
  )
}

export default Contact
