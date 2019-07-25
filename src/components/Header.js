import React from "react";
import { Jumbotron } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Jumbotron fluid>
        <container fluid>
          <h1 className="display-3">Hello, Project!</h1>
        </container>
      </Jumbotron>
    </div>
  );
};

export default Header;
