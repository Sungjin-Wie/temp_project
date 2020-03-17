import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner, Container, Row, Col, Table } from "reactstrap";

const Result = ({ match }) => {
  const name = match.params.name;
  const AUCTION = gql`
    query rows($name: String) {
      rows(characterName: "", itemName: $name) {
        itemId
        itemName
        count
        currentPrice
        unitPrice
      }
    }
  `;

  return (
    <div>
      <Query query={AUCTION} variables={{ name }}>
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
              <Table>
                <thead>
                  <tr>
                    <th>이름 </th>
                    <th> </th>
                    <th>갯수 </th>
                    <th>가격 </th>
                    <th>개당 가격</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map(c => {
                    return (
                      <tr>
                        <th scope="row">{c.itemName} </th>
                        <td>
                          <img
                            src={`https://img-api.neople.co.kr/df/items/${
                              c.itemId
                            }`}
                            alt="X"
                          />
                        </td>
                        <td>{c.count} </td>
                        <td>{c.currentPrice} </td>
                        <td>{c.unitPrice} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Result;
