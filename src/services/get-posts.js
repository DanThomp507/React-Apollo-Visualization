import { gql } from "apollo-boost";
export const getPosts = gql`
{
  allPosts(count: 100) {
    id
    title
    body
    author {
      id
      firstName
      lastName
      email
    }
    likelyTopics{
      label
      likelihood
    }
  }
}
`