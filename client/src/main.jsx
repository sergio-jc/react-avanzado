import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "../Context";

const client = new ApolloClient({
    uri: "https://react-avanzado-zqyw.vercel.app/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
    </AppProvider>
);
