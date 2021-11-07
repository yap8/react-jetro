import { Wrapper, Section, Text, Paragraph, Link, Group, TextField, TextArea, Button } from "./Form.styled"

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Section>
        <Text>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. Siri Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.</Text>
        <Text>
          <Paragraph highlighted>Best PSD freebies</Paragraph>
          <Paragraph>328 Ave C</Paragraph>
          <Paragraph>Saskatoon, SK</Paragraph>
          <Paragraph>S7R 2V9</Paragraph>
        </Text>
        <Text>
          <Paragraph>
            <Link href="tel:8888428356"><b>t:</b> (888) 842 - 8356</Link>
          </Paragraph>
          <Paragraph>
            <Link href="tel:8884529257"><b>f:</b> (888) 452 - 9257</Link>
          </Paragraph>
          <Paragraph>
            <Link href="mailto:info@psdfreebies.com"><b>e:</b> info@psdfreebies.com</Link>
          </Paragraph>
        </Text>
      </Section>
      <Section form>
        <Group>
          <TextField placeholder="first name"></TextField>
        </Group>
        <Group>
          <TextField placeholder="last name"></TextField>
        </Group>
        <Group>
          <TextField placeholder="email address"></TextField>
        </Group>
        <Group>
          <TextArea as="textarea" placeholder="message"></TextArea>
        </Group>
        <Group>
          <Button type="submit">Submit</Button>
        </Group>
      </Section>
    </Wrapper>
  )
}

export default Form
