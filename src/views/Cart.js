import { EditorComponent } from "components/Tool/Editor";
import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Cart() {
  const uploadImageCallBack = () => {};

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">購機資訊頁面編輯器</Card.Title>
              </Card.Header>
              <Card.Body>
                <EditorComponent
                  toolBar={{
                    image: {
                      uploadCallback: uploadImageCallBack,
                      previewImage: true,
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
