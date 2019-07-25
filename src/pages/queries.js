import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 8) {
      medium_cover_image
      id
      title
      rating
      genres
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
