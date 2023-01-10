import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BasicExample({ category }) {
  return (
    <Container
      as="button"
      // variant="outline-secondary"
      className="overviewButton"
      fluid
    >
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
