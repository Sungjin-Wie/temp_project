import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col />
          <Col>
          <h4>캐릭터 정보 검색</h4>
          </Col>
          <Col />
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col />
          <Col>
              <input value={val} onChange={e => setVal(e.target.value)} />
              <Link to={`/search/${val}`}>검색</Link>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};
export default Home;
