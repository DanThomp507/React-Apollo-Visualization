import { gql } from "apollo-boost";
export const getPosts = gql`
{
  allPosts(count: 100) {
      id
      title
      body
      published
      createdAt
    likelyTopics{
      label
      likelihood
    }
  }
}
`