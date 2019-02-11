import gql from 'graphql-tag';

export const ADD_CAT_MUTATION = gql`
  mutation AddNewCat($name: String!, $description: String, $color: String!, $photoUrl: String!) {
    addCat(name: $name, description: $description, color: $color, photoUrl: $photoUrl) {
      name, 
      description, 
      color,
      photoUrl, 
      likes
    }
  }
`;

export const INCREMENT_CAT_LIKES_MUTATION = gql`
  mutation IncrementLikes($catId: ID!) {
    incrementLikes(id: $catId) {
      id
      likes
    }
  }
`;