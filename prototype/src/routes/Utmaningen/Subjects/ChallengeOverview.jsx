/* ChallengeOverview.jsx : 

Main overview page of the challenge which displays the subjects included in the challenge. 
Subjects are defined in the subjects state in App.js, the array can be edited to add or remove challenges.

*/

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Subject from "../../../components/Subject";

const ChallengeOverview = ({ subjects, setSubjects }) => {
  return (
    <Container className="challengeContainer" fluid>
      <Row>
        <h1>Utmaningen</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {subjects.map((subject) => (
            <Subject
              key={subject.name}
              subject={subject}
              subjects={subjects}
              setSubjects={setSubjects}
            />
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ChallengeOverview;
