import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YoutubeEmbed from "../../../components/YoutubeEmbed";
import { Link } from "react-router-dom";

const IntroVideo = ({ subjects, setSubjects }) => {
  const handleComplete = () => {
    const id = subjects[0].id;
    const updateSubject = subjects.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          complete: true,
          viewed: true,
        };
      }

      if (subject.id === id + 1) {
        return {
          ...subject,
          open: true,
        };
      } else {
        return subject;
      }
    });

    setSubjects(updateSubject);
  };

  return (
    <Container className="challengeContainer challengeContainerVideo" fluid>
      <Row>
        <h1>Intro Video</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <YoutubeEmbed embedId={"uQ2hcqlTR8c"} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="py-5" xs={8}>
          <Button
            variant="secondary"
            onClick={handleComplete}
            as={Link}
            to="/utmaningen"
          >
            Tillbaka till utmaningen
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default IntroVideo;
