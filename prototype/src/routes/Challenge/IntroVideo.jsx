import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const IntroVideo = () => {
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
    </Container>
  );
};

export default IntroVideo;
