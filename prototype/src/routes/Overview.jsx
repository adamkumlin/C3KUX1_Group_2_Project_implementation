import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import OverviewCategory from "../components/OverviewCategory";
import Klimat from "../images/klimat_hand.png";
import Quiz from "../images/klimat_quiz.png";
import Forum from "../images/klimat_forum.png";
import Logo from "../images/earth-icon.svg";
import Header from "../components/Header";

const overview = () => {
  const categories = [
    {
      name: "Minska klimatpåverkan",
      path: "/minskaklimatpaverkan",
      image: Klimat,
    },
    {
      name: "Utmaningen",
      path: "/challenge",
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
            <img src={Logo} alt="Jorden logotyp" />
            <h2>KLIMATUTMANINGEN</h2>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8} className="d-flex">
            <Container fluid className="overviewBox">
              {categories.map((category) => (
                <Col>
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

export default overview;
