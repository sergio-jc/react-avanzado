import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
    uri: "https://react-avanzado-zqyw.vercel.app/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>
);
