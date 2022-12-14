import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function BasicExample({ category }) {
  return (
    <Container className="overviewButton" fluid>
      <Link
        to={category.path}
        style={{ color: "black", textDecoration: "none" }}
      >
        <Row>
          <Col>
            <img src={category.image} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{category.name}</h1>
          </Col>
        </Row>
      </Link>
    </Container>
  );
}

export default BasicExample;
