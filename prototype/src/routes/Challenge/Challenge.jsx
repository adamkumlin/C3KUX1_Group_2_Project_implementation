import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ChallengeSubject from "../../components/ChallengeSubject";

const Challenge = () => {
  return (
    <main className="challengeMain">
      <Outlet />
    </main>
  );
};

export default Challenge;
