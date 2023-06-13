import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import { GlobalProvider } from "./context/global";
import { NextUIProvider } from '@nextui-org/react';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";





const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:`Bearer ${process.env.REACT_APP_TOKEN_8BASE}` ,
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
      <Auth0ProviderWithNavigate>
        <NextUIProvider>
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>,
      </NextUIProvider>
      </Auth0ProviderWithNavigate>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

