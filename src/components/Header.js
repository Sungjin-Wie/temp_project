import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Jumbotron fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="display-3" style={{textAlign: "center"}}>Hello, Project!</h1>
          </Link>
          </Jumbotron>
    </div>
  );
};

export default Header;
