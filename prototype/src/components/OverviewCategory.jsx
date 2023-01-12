import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/* The button which is used on the overview page shown after logging in */
function OverviewCategory({ category }) {
  return (
    <Container as="button" className="overviewButton" fluid>
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

export default OverviewCategory;
