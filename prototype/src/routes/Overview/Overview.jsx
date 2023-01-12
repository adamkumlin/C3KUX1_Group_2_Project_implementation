import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OverviewCategory from "../../components/OverviewCategory";
import Klimat from "../../images/klimat_hand.png";
import Quiz from "../../images/klimat_quiz.png";
import Forum from "../../images/klimat_forum.png";
import Title from "../../components/Title.jsx";

/* Layout for overview, where user can navigate to Utmaningen, Forum or Minska klimatpåverkan */
const Overview = () => {
  /* Settings to be used with buttons on categories page. Mapped and passed as prop to OverviewCategory */
  const categories = [
    {
      name: "Minska klimatpåverkan",
      path: "/minskaklimatpaverkan",
      image: Klimat,
    },
    {
      name: "Utmaningen",
      path: "/utmaningen",
      image: Quiz,
    },
    {
      name: "Forum / Webboard",
      path: "/forum",
      image: Forum,
    },
  ];

  return (
    <main className="main challengeOverview">
      <Container className="overviewContainer">
        <Row>
          <Col className="overviewHeader">
            <Title />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8} className="d-flex">
            <Container fluid className="overviewBox">
              {categories.map((category) => (
                <Col key={category.name}>
                  <OverviewCategory category={category} />
                </Col>
              ))}
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Overview;
