import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Info, About, Search, Auction, Result } from "../pages";
import { Menu, Header, Footer } from "../components";
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
          <Route path="/search/:id" component={Search} />
          <Route path="/info/:name/:id" component={Info} />
          <Route exact path="/about" component={About} />
          <Route path="/result/:name" component={Result} />
          <Route path="/auction" component={Auction} />
        </Switch>
        <br />
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
