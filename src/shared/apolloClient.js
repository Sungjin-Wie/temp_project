import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://df-server.herokuapp.com/"
})

export default client;