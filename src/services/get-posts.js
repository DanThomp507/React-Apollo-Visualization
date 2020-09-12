import { gql } from "apollo-boost";
export const getPosts = gql`
{
  allPosts(count: 1000) {
      id
      title
    likelyTopics{
      label
      likelihood
    }
  }
}
`