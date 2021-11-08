import { Aside, ContentWrapper, Form, Map, PageContent, SectionTitle } from "../../components"

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact us</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBsUXs5jv6tud_QCJSYW8TbyS1l5IP63Xc`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: 400, marginBottom: 36 }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
          <Form />
        </PageContent>
        <Aside />
      </ContentWrapper>
    </>
  )
}

export default Contact
