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
      path: "/video",
      color: "#cb8c8c",
      complete: true,
    },
    {
      name: "Fossila bränslen",
      path: "/fossilabranslen",
      color: "#cba08c",
      complete: true,
    },
    {
      name: "Glaciärer",
      path: "/glaciarer",
      color: "#d8c196",
      complete: false,
    },
    {
      name: "Globala Temperaturer",
      path: "/globalatemperaturer",
      color: "#b1d4da",
      complete: false,
    },
    {
      name: "Havsnivåer",
      path: "/havsnivaer",
      color: "#a1bdcd",
      complete: false,
    },
    {
      name: "Tips på mer info",
      path: "/tips",
      color: "#7f8e97",
      complete: false,
    },
    {
      name: "Spel",
      path: "/spel",
      color: "#7f8e97",
      complete: false,
    },
  ];

  return (
    <Container className="challengeContainer" fluid>
      <Row>
        <h1>Utmaningen</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {subjects.map((subject) => (
            <ChallengeSubject subject={subject} />
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Challenge;
