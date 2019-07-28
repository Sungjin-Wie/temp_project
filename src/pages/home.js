import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Spinner,
  Container,
  Row,
  Col
} from "reactstrap";

const Home = () => {
  return (
    <div>
      <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
          if (loading)
            return (
              <Container>
                <Row>
                  <Col />
                  <Col>
                    <div>
                      <Spinner color="primary" />
                      <div>loading...</div>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </Container>
            );
          if (error) return <span>error!!!!!</span>;
          return (
            <div>
              <Container>
                <br />
                <Row>
                  <Col xl="4">
                    <Card style={{ width: "70%" }}>
                      <CardHeader>{data.rows[0].characterName}</CardHeader>
                      <CardBody>
                        <Link to="/info" className="text-white">
                          <CardImg
                            top
                            style={{ width: "100%", height: "100%" }}
                            src={`https://img-api.neople.co.kr/df/servers/cain/characters/a8a66a8cecc87bae4e939a170d1fab91?zoom=3&apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb`}
                            alt="not loaded!"
                          />
                        </Link>
                        <CardTitle>Level : {data.rows[0].level}</CardTitle>
                        <CardText>직업 : {data.rows[0].jobGrowName}</CardText>
                        <Button color="info">
                          <Link to="/info" className="text-white">
                            정보
                          </Link>
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <br />
              <br />
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Home;
