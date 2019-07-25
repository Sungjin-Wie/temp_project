import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Info, About } from "../pages";
import { Menu, Header } from "../components";
import client from "./apolloClient";
import { ApolloProvider } from "react-apollo";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info/:name" component={Info} />
          <Route path="/info" component={Info} />
          <Route exact path="/about" component={About} />
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
