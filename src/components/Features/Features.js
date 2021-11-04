import { Inner, Item, ItemBody, ItemButton, ItemHeader, ItemIcon, Items, ItemText, ItemTitle, Wrapper } from "./Features.styled"

const Features = () => {
  return (
    <Wrapper>
      <Inner>
        <Items>
          <Item>
            <ItemHeader>
              <ItemIcon src="gear.png" />
              <ItemTitle>Check out my latest portfolio items</ItemTitle>
            </ItemHeader>
            <ItemBody>
              <ItemText>
                Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.
              </ItemText>
              <ItemButton to="/">More</ItemButton>
            </ItemBody>
          </Item>
          <Item>
            <ItemHeader>
              <ItemIcon src="check.png" />
              <ItemTitle>Offer Top Notch Quality Work &amp; Services</ItemTitle>
            </ItemHeader>
            <ItemBody>
              <ItemText>
                Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.
              </ItemText>
              <ItemButton to="/">More</ItemButton>
            </ItemBody>
          </Item>
          <Item>
            <ItemHeader>
              <ItemIcon src="person.png" />
              <ItemTitle>Follow Me on Twitter, Facebook &amp; Pinterest</ItemTitle>
            </ItemHeader>
            <ItemBody>
              <ItemText>
                Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.
              </ItemText>
              <ItemButton to="/">More</ItemButton>
            </ItemBody>
          </Item>
        </Items>
      </Inner>
    </Wrapper>
  )
}

export default Features
