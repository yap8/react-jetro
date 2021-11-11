import { Wrapper, Items, Item, ItemHeader, ItemImage, ItemVideo, ItemBody, ItemInfo, ItemInfoTitle, ItemInfoText, ItemContent, ItemTitle, ItemText, ItemParagraph, ItemLink } from "./BlogPosts.styled"

const BlogPosts = ({ blogPosts }) => {
  return (
    <Wrapper>
      <Items>
        {blogPosts.map(post => (
          <Item type={post.type}>
            {(post.image || post.video) && (
              <ItemHeader>
                {post.image && <ItemImage src={`/react-jetro/${post.image}`} />}
                {post.video && <ItemVideo dangerouslySetInnerHTML={{__html: post.video}} />}
              </ItemHeader>
            )}
            <ItemBody>
              {(post.date || post.tags || post.comments) && (
                <ItemInfo>
                  {post.date && (
                    <>
                      <ItemInfoTitle>Date</ItemInfoTitle>
                      <ItemInfoText>{post.date}</ItemInfoText>
                    </>
                  )}
                  {post.date && (
                    <>
                      <ItemInfoTitle>Tags</ItemInfoTitle>
                      <ItemInfoText>{post.tags.join(' | ')}</ItemInfoText>
                    </>
                  )}
                  {post.date && (
                    <>
                      <ItemInfoTitle>Comments</ItemInfoTitle>
                      <ItemInfoText>{post.comments}</ItemInfoText>
                    </>
                  )}
                </ItemInfo>
              )}
              <ItemContent type={post.type}>
                {post.title && <ItemTitle>{post.title}</ItemTitle>}
                {post.link && <ItemLink href={`http://${post.link}`}>{post.link}</ItemLink>}
                <ItemText>
                  {post.text.split("\n").map(paragraph => (
                    <ItemParagraph>{paragraph}</ItemParagraph>
                  ))}
                </ItemText>
              </ItemContent>
            </ItemBody>
          </Item>
        ))}
      </Items>
    </Wrapper>
  )
}

export default BlogPosts
