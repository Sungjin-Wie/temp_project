import React from "react";
import { Query } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import gql from "graphql-tag";
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

const Home = ({ match }) => {
  const name = match.params.id;
  const HOME_PAGE = gql`
    query rows($name: String!){
      rows(characterName: $name) {
        characterId
        characterName
        level
        jobGrowName
      }
    }
  `;

  return (
    <div>
      <Query query={HOME_PAGE} variables={{ name }}>
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
          return data.rows.map(c => {
            return (
              <div>
                <Container>
                  <br />
                  <Row>
                    <Col xl="4">
                      <Card style={{ width: "70%" }}>
                        <CardHeader>{c.characterName}</CardHeader>
                        <CardBody>
                          <Link to={`/info/${c.characterName}/${c.characterId}`} className="text-white">
                            <CardImg
                              top
                              style={{ width: "100%", height: "100%" }}
                              src={`https://img-api.neople.co.kr/df/servers/cain/characters/${c.characterId}?zoom=3&apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb`}
                              alt="not loaded!"
                            />
                          </Link>
                          <CardTitle>Level : {c.level}</CardTitle>
                          <CardText>직업 : {c.jobGrowName}</CardText>
                          <Button color="info">
                            <Link to={`/info/${c.characterName}/${c.characterId}`} className="text-white">
                              정보
                            </Link>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <br />
              </div>
            );
          });
        }}
      </Query>
    </div>
  );
};
export default Home;
