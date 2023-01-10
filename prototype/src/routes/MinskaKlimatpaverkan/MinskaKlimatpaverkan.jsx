import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MinskaKlimatpaverkan = () => {
  return (
    <Container className="challengeContainer" fluid>
      <Row>
        <h1>Minska klimatpåverkan</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <section className="subjectPage"></section>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MinskaKlimatpaverkan;
