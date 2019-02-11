import gql from 'graphql-tag';

export const ALL_CATS_QUERY = gql`
  query GetAllCats {
    cats {
      id
      name
      likes
      photoUrl
      color
    }
  }
`;

export const SINGLE_CAT_QUERY = gql`
  query GetOneCat($catId: ID!) {
    cat(id: $catId) {
      id
      name
      description
      photoUrl
      color
      likes
    }
  }
`;