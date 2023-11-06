import React from "react";
import styled from "styled-components";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { Pagination } from "antd";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

function UserList() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">會員列表</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">會員ID</th>
                      <th className="border-0">會員名稱</th>
                      <th className="border-0">電話</th>
                      <th className="border-0">地址</th>
                      <th className="border-0">常用取貨門市</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>洪政源</td>
                      <td>0960986938</td>
                      <td>新竹市北區榮濱南路25號之6</td>
                      <td>榮濱門市</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>唐杉棋</td>
                      <td>0921522902</td>
                      <td>桃園市大園區大豐一街91號2樓之13</td>
                      <td>大園門市</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>張淇熙</td>
                      <td>0926602877</td>
                      <td>新北市土城區明街84號10樓</td>
                      <td>土城門市</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>姚研葉</td>
                      <td>0988170788</td>
                      <td>高雄市前鎮區時代南三路92號3樓</td>
                      <td>時代南門市</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>劉筑芝</td>
                      <td>0917707505</td>
                      <td>屏東縣竹田鄉東西十路33號</td>
                      <td>竹田門市</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>沈剛琪</td>
                      <td>0961254502</td>
                      <td>臺中市大肚區遊園路１段18號</td>
                      <td>大肚門市</td>
                    </tr>
                  </tbody>
                </Table>
                <StyledPagination
                  showQuickJumper
                  defaultCurrent={1}
                  total={6}
                  onChange={onChange}
                />
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default UserList;
