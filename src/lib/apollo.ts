import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6mdvrlf0g4101uge7jtfs1i/master',
  cache: new InMemoryCache()
});
