import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/api/blog`,
  cache: new InMemoryCache(),
});