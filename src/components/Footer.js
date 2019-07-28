import React from "react";
import logo from "../logo.png";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs="3" />
        <Col xs="auto">
          <a href="http://developers.neople.co.kr">
            <img src={logo} alt="Neople 오픈 API" style={{ width: "150%" }} />
          </a>
        </Col>
        <Col xs="1" />
      </Row>
    </Container>
  );
};

export default Footer;
