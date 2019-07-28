import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import {
  Spinner,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const Info = ({ match }) => {
  const name = match.params.name;
  const id = match.params.id;
  const INFO = gql`
  query ($name: String!, $id: String!){
    rows(characterName: $name) {
      characterId
      characterName
      level
      jobGrowName
    }
  status(characterId: $id) {
    name
    value
  }
}
`;
  return (
    <Query query={INFO} variables={{ id, name }}>
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
          <Container>
            <br />
            <Row>
              <Col>
                <Card style={{ width: "100%" }}>
                  <CardHeader>{data.rows[0].characterName}</CardHeader>
                  <CardBody>
                    <CardImg
                      top
                      style={{ width: "100%", height: "100%" }}
                      src={`https://img-api.neople.co.kr/df/servers/cain/characters/${match.params.id}?zoom=3&apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb`}
                      alt="not loaded!"
                    />
                    <CardTitle>Level : {data.rows[0].level}</CardTitle>
                    <CardText>직업 : {data.rows[0].jobGrowName}</CardText>
                    <Button color="info">
                      <Link to="/" className="text-white">
                        돌아가기
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <ListGroup>
                  {data.status.map(c => {
                    return (
                      <ListGroupItem>
                        {c.name} : {c.value}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        );
      }}
    </Query>
  );
};
export default Info;
