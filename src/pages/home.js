import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
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
              <div>
                <Spinner color="primary" />
                <div>loading...</div>
              </div>
            );
          if (error) return <span>error!!!!!</span>;
          return data.movies.map(movie => (
            <div>
              <Container>
                <Row>
                  <Col xl="4" />
                  <Col xl="4">
                    <Card style={{ width: "60%" }}>
                      <CardHeader>{movie.title}</CardHeader>
                      <CardBody>
                        <CardImg
                          top
                          style={{ width: "100%", height: "80%" }}
                          src={movie.medium_cover_image}
                          alt="not loaded!"
                        />
                        <CardTitle>Genre : {movie.genre}</CardTitle>
                        <CardText>Rating : {movie.rating}</CardText>
                        <Button>자세히 보기</Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl="4" />
                </Row>
              </Container>
              <br />
              <br />
            </div>
          ));
        }}
      </Query>
    </div>
  );
};
export default Home;
