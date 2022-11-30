import { gql } from "@apollo/client";

export const ADD_TO_FAV = gql`
  mutation AddToFav($userEmail: String!, $storyId: String!) {
    addToFav(userEmail: $userEmail, storyId: $storyId)
  }
`;
