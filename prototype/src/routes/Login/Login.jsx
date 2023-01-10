import React from "react";
import LogInForm from "../../components/LogInForm.jsx";
import Title from "../../components/Title.jsx";

import { Container, Col, Row } from "react-bootstrap";

function LogIn({ setIsSignedIn }) {
  //Set if the user is signed in or not
  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

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
            <LogInForm signin={signin} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
// Placerar tre komponenter och en bild.

export default LogIn;
// Exporterar komponenten som "LogIn".
