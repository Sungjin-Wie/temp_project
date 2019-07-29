import React from "react";
import logo from "../logo.png";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm="4" />
        <Col sm="auto">
          <a href="http://developers.neople.co.kr">
            <img src={logo} alt="Neople 오픈 API" style={{ width: "150%" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
