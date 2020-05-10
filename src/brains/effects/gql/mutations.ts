import { gql } from 'overmind-graphql';

export const createPost = gql`
  mutation CreatePost {
    createPost {
      id
    }
  }
`;
