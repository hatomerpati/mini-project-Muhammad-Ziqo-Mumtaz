import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://relaxing-mollusk-56.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false}),
  headers: {
    "x-hasura-admin-secret":
      "RKnxlPjLnZ3pJ0b19AqZOLThAhpsOMJTmk5c1dNzUsIS2LKWpQhcJpE1T1lDZ6oH",
  },
});
