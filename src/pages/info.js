import React, { useState } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Spinner,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table
} from "reactstrap";
import classnames from "classnames";
import gql from "graphql-tag";

const API_KEY = `apikey=7KyujUEOMpBOTIELdNlMypTX0d0D6wdb`;

const Info = ({ match }) => {
  const [tab, setTab] = useState("1");
  const toggle = num => {
    setTab(num);
  };
  
  const name = match.params.name;
  console.log(name);
  const id = match.params.id;
  const INFO = gql`
    query($name: String, $id: String) {
      rows(characterName: $name, itemName: "") {
        characterId
        characterName
        level
        jobName
        jobGrowName
      }
      status(characterId: $id) {
        name
        value
      }
      equipment(characterId: $id) {
        slotName
        itemId
        itemName
        itemType
        itemTypeDetail
        reinforce
        refine
        amplificationName
        enchant {
          status {
            name
            value
          }
        }
      }
      avatar(characterId: $id) {
        slotName
        itemName
        itemId
        emblems {
          slotColor
          itemName
        }
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
          <div>
            <br />
            <Row>
              <Col sm="4">
                <Card style={{ width: "100%" }}>
                  <CardHeader>{data.rows[0].characterName}</CardHeader>
                  <CardBody>
                    <CardImg
                      top
                      style={{ width: "100%", height: "100%" }}
                      src={`https://img-api.neople.co.kr/df/servers/cain/characters/${
                        match.params.id
                      }?zoom=3&${API_KEY}`}
                      alt="not loaded!"
                    />
                    <CardTitle>Level : {data.rows[0].level}</CardTitle>
                    <CardText>
                      직업 :
                      {data.rows[0].jobGrowName === "자각2"
                        ? `${data.rows[0].jobName}(${data.rows[0].jobGrowName})`
                        : data.rows[0].jobGrowName}
                    </CardText>
                    <Button color="info">
                      <Link to="/" className="text-white">
                        돌아가기
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tab === "1"
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      스탯
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tab === "2"
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      장비
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tab === "3"
                      })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      아바타
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={tab}>
                  <TabPane tabId="1">
                    <Table>
                      <thead>
                        <tr>
                          <th>스탯</th>
                          <th>수치</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.status.map(c => {
                          return (
                            <tr>
                              <th scope="row">{c.name}</th>
                              <td>{c.value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </TabPane>
                  <TabPane tabId="2">
                    <Table>
                      <thead>
                        <tr>
                          <th>종류</th>
                          <th> </th>
                          <th>이름</th>
                          <th>마법부여</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.equipment.map(c => {
                          return (
                            <tr>
                              <th scope="row">
                                {c.itemType === "무기"
                                  ? "무기"
                                  : `${
                                      c.itemTypeDetail.indexOf("천") !== -1 ||
                                      c.itemTypeDetail.indexOf("가죽") !== -1 ||
                                      c.itemTypeDetail.indexOf("경갑") !== -1 ||
                                      c.itemTypeDetail.indexOf("중갑") !== -1 ||
                                      c.itemTypeDetail.indexOf("판금") !== -1
                                        ? c.itemTypeDetail.indexOf("천") !== -1
                                          ? c.itemTypeDetail.substring(2)
                                          : c.itemTypeDetail.substring(3)
                                        : c.itemTypeDetail
                                    }`}
                              </th>
                              <td>
                                <img
                                  alt="not loaded!"
                                  src={`https://img-api.neople.co.kr/df/items/${
                                    c.itemId
                                  }?${API_KEY}`}
                                />
                              </td>
                              <td>
                                {c.reinforce === 0 ? " " : `+${c.reinforce} `}
                                {c.itemName}
                                {c.amplificationName != null
                                  ? ` (${c.amplificationName})`
                                  : ""}
                                {`${
                                  c.itemType === "무기"
                                    ? c.refine === 0
                                      ? " "
                                      : ` (+${c.refine}재련)`
                                    : " "
                                }`}
                              </td>
                              <td>
                                {c.enchant.status.map(d => {
                                  if(d == null) return;
                                  else
                                    return (
                                    <p>{d.name}+{d.value}</p>
                                  )
                                })}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </TabPane>
                  <TabPane tabId="3">
                    <Table>
                      <thead>
                        <tr>
                          <th>종류</th>
                          <th> </th>
                          <th>이름</th>
                          <th>엠블렘</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.avatar.map(c => {
                          return (
                            <tr>
                              <th scope="row">
                                {c.slotName.substring(
                                  0,
                                  c.slotName.indexOf(" ")
                                )}
                              </th>
                              <td>
                                <img
                                  alt="not loaded!"
                                  src={`https://img-api.neople.co.kr/df/items/${
                                    c.itemId
                                  }?${API_KEY}`}
                                />
                              </td>
                              <td>{c.itemName}</td>
                              <td>
                                {c.emblems.map(d => {
                                  return <p>{d.itemName}</p>
                                })}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </div>
        );
      }}
    </Query>
  );
};
export default Info;
