import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ChallengeSubject from "../../components/ChallengeSubject";

const Challenge = () => {
  const Subjects = [
    "Intro video",
    "Fossila bränslen",
    "Glaciärer",
    "Globala Temperaturer",
    "Havsnivåer",
    "Spel",
    "Sammanfattning",
  ];

  const subjects = [
    {
      name: "Intro video",
      path: "1",
      color: "#cb8c8c",
      complete: true,
    },
    {
      name: "Fossila bränslen",
      path: "2",
      color: "#cba08c",
      complete: true,
    },
    {
      name: "Glaciärer",
      path: "3",
      color: "#d8c196",
      complete: false,
    },
    {
      name: "Globala Temperaturer",
      path: "4",
      color: "#b1d4da",
      complete: false,
    },
    {
      name: "Havsnivåer",
      path: "5",
      color: "#a1bdcd",
      complete: false,
    },
    {
      name: "Tips på mer info",
      path: "6",
      color: "#7f8e97",
      complete: false,
    },
    {
      name: "Spel",
      path: "7",
      color: "#7f8e97",
      complete: false,
    },
  ];

  return (
    // <main className="challengeMain">
    <Container className="challengeContainer" fluid>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {subjects.map((subject) => (
            <ChallengeSubject subject={subject} />
            // <div className="challengeMain--Subject">
            //   <h3>{subject}</h3>
            //   <button>Start</button>
            // </div>
          ))}
          <Outlet />
        </Col>
        <Col></Col>
      </Row>
    </Container>
    // </main>
  );
};

export default Challenge;
