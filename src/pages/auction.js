import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Auction = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col />
          <Col>
            <h4>경매장 검색</h4>
            <p>아이템 이름을 정확하게 입력해주세요.</p>
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
            <Link to={`/result/${val}`}>검색</Link>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};
export default Auction;
