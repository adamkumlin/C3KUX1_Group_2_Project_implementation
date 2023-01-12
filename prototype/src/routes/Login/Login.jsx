import React from "react";
import LogInForm from "../../components/LogInForm.jsx";
import Title from "../../components/Title.jsx";

import { Container, Col, Row } from "react-bootstrap";

function LogIn({ setIsSignedIn }) {
  /* Set user as signed in / out  (not currently in use, but would be used with private route in react router)*/
  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  /* Layour and contents of the login page*/
  return (
    <main className="main challengeOverview">
      <Container className="overviewContainer">
        <Row>
          <Col className="overviewHeader">
            <Title />
          </Col>
        </Row>
        <Row>
          <Col>
            <LogInForm />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
// Placerar tre komponenter och en bild.

export default LogIn;
// Exporterar komponenten som "LogIn".
