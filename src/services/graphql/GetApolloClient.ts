import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import currentRepoVar from "./localStates/currentRepo";
import { graphqlAPI, tokenAPI } from "./config";

export const GetApolloClient = () => {
  const httpLink = createHttpLink({ uri: graphqlAPI });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: tokenAPI ? `Bearer ${tokenAPI}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            currentRepo: {
              read() {
                return currentRepoVar();
              },
            },
          },
        },
      },
    }),
  });
  return client;
};
