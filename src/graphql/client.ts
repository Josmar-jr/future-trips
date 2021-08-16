import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_HOST;

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
});
