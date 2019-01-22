import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  'https://api.graph.cool/simple/v1/frontity-v1',
  { headers: {} },
);

export default client;
