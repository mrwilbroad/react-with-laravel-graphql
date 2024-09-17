import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ENV } from "./environment/environment";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// apollo
const client = new ApolloClient({
  uri: ENV.ONPRODUCTION ? ENV.GRAPHQL_ENDPOINT_PROD : ENV.GRAPHQL_ENDPOINT_DEV,
  cache: new InMemoryCache(),
  defaultOptions : {
    watchQuery : {
      fetchPolicy : "network-only",
      nextFetchPolicy : "cache-first"
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
