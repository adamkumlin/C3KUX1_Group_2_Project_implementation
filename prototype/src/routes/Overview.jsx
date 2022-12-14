import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const overview = () => {
  return (
    <Container fluid className="overviewContainer">
      <Row>
        <Col></Col>
        <Col xs={6} className="d-flex">
          <Link to="/challenge">Challenge</Link>
          <Link to="/links">Links</Link>
          <Link to="/forum">Forum</Link>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default overview;
