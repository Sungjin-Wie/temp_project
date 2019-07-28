import React from "react";
import logo from "../logo.png";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col xs="3"/>
          <Col xs="auto">
            <a href="http://developers.neople.co.kr">
              <img src={logo} alt="Neople 오픈 API" style={{ width: "150%" }} />
            </a>
          </Col>
          <Col xs="1"/>
        </Row> 
      </Container>
      <br />
      <br />
      <p>
        즐겨 하는 게임인 던전 앤 파이터의 OPEN API와 graphQL-yoga를 활용하여
        캐릭터의 데이터를 가져왔고, react-router-dom을 이용하여 새로고침 없는
        라우팅을 구현하였습니다.
      </p>
    </div>
  );
};
export default About;
