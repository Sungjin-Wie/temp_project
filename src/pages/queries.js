import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    rows(characterName: "건전참철문화") {
      characterId
      characterName
      level
      jobGrowName
    }
  }
`;

export const INFO = gql`
  query {
    rows(characterName: "건전참철문화") {
      characterId
      characterName
      level
      jobGrowName
    }
  status(characterId:"a8a66a8cecc87bae4e939a170d1fab91") {
    name
    value
  }
}
`;
