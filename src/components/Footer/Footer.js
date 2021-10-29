import { Section, Inner, Title, Wrapper, Text, Paragraph, Social, SocialItem, SocialLink, SocialIcon, ParagraphLink, Tweets, Tweet, TweetLink } from "./Footer.styled"

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Section>
          <Title>About jetro</Title>
          <Text>
            <Paragraph>Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. Id mei vitae denique, in eam commodo veritus disputando.</Paragraph>
            <Paragraph>Pro et erant delicata, eu vim essent imperdiet accommodare, dictas deseruisse ius an. Solet everti definitionem id ius, sonet oporteat cu vim.</Paragraph>
          </Text>
        </Section>
        <Section>
          <Title>Twitter widget</Title>
          <Tweets>
            <Tweet>
              <Text>
                <Paragraph>
                  <TweetLink href="https://twitter.com/" target="_blank">@pixelmater</TweetLink> What an awesome design with great functionality :)
                </Paragraph>
                <Paragraph>
                  <TweetLink href="https://twitter.com/" target="_blank">about 1 hour ago</TweetLink>
                </Paragraph>
              </Text>
            </Tweet>
            <Tweet>
              <Text>
                <Paragraph>
                  <TweetLink href="https://twitter.com/" target="_blank">@designdude</TweetLink> What an awesome design with great functionality :)
                </Paragraph>
                <Paragraph>
                  <TweetLink href="https://twitter.com/" target="_blank">about 2 hours ago</TweetLink>
                </Paragraph>
              </Text>
            </Tweet>
          </Tweets>
          <Text>Follow <TweetLink href="https://twitter.com/" target="_blank">@bestpsdfreebies</TweetLink></Text>
        </Section>
        <Section>
          <Title>Contact us</Title>
          <Text>
            <Paragraph>Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. </Paragraph>
            <Paragraph nomargin>
              <ParagraphLink href="mailto:information@jetro.com" target="_blank">information@jetro.com</ParagraphLink>
            </Paragraph>
            <Paragraph>
              <ParagraphLink href="https://www.google.co.uk/maps/" target="_blank">1.222.333.4444</ParagraphLink>
            </Paragraph>
          </Text>
          <Social>
            <SocialItem>
              <SocialLink href="https://www.facebook.com/" target="_blank">
                <SocialIcon src="facebook.png" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://twitter.com/" target="_blank">
                <SocialIcon src="twitter.png" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="mailto:arseny.nebozhenko@gmail.com" target="_blank">
                <SocialIcon src="email.png" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.rssboard.org/" target="_blank">
                <SocialIcon src="rss.png" />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://vimeo.com/" target="_blank">
                <SocialIcon src="vimeo.png" />
              </SocialLink>
            </SocialItem>
          </Social>
        </Section>
      </Inner>
    </Wrapper>
  )
}

export default Footer
