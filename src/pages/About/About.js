import { Aside, SectionTitle, ContentWrapper, PageContent, Alert } from "../../components"
import TextContent, { Paragraph, Text, Image } from '../../components/TextContent/'

const About = () => {
  return (
    <>
      <SectionTitle>About us</SectionTitle>
      <ContentWrapper>
        <PageContent>
          <TextContent>
            <Paragraph>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Maecenas in magna mollis lectus lacinia mollis.</Text>
            </Paragraph>
            <Paragraph>
              <Image src="mike.png" />
              <Text>Maecenas ipsum metus, semper hendrerit varius mattis, hasr congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elem entum enim rutrum. Nam mi erat, porta idso ultrices nec, pellentesq ue vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdumni justo ultricies. Sed luctus dui nec ni  sl tem pus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros. Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci.  Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.</Text>
            </Paragraph>
            <Paragraph>
              <Text>Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies. Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.</Text>
            </Paragraph>
            <Paragraph>
              <Text quote>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit           	         amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci.</Text>
            </Paragraph>
            <Paragraph>
              <Text>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem.</Text>
              <Text>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem.</Text>
            </Paragraph>
            <Paragraph>
              <Text>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas.</Text>
              <Text>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas.</Text>
              <Text>Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas.</Text>
            </Paragraph>
          </TextContent>
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
