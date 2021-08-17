import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPage($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
      profile {
        url
        height
        width
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPages($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
      profile {
        url
        height
        width
      }
    }
  }
`;

export const GET_ALLPLACES = gql`
  query getAllPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;
