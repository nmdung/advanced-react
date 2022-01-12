import { gql } from "@apollo/client";

export default gql`
  query GetUser {
    viewer {
      login
      name
      url
    }
  }
`;
