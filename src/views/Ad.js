import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { UploadOutlined } from "@ant-design/icons";
import { Button as AntButton, message, Upload } from "antd";

function Ad() {
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">變更廣告橫幅</Card.Title>
              </Card.Header>
              <Card.Body>
                <h5>廣告1(預覽)</h5>
                <div className="card-image">
                  <img
                    alt="..."
                    src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                  ></img>
                </div>
                <Upload {...props}>
                  <AntButton icon={<UploadOutlined />}>上傳新圖片</AntButton>
                </Upload>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Body>
                <h5>廣告2</h5>
                <div className="card-image">
                  <img
                    alt="..."
                    src={require("assets/img/sidebar-1.jpg")}
                  ></img>
                </div>
                <Upload {...props}>
                  <AntButton icon={<UploadOutlined />}>上傳新圖片</AntButton>
                </Upload>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Body>
                <h5>廣告3</h5>
                <div className="card-image">
                  <img
                    alt="..."
                    src={require("assets/img/sidebar-2.jpg")}
                  ></img>
                </div>
                <Upload {...props}>
                  <AntButton icon={<UploadOutlined />}>上傳新圖片</AntButton>
                </Upload>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ad;
