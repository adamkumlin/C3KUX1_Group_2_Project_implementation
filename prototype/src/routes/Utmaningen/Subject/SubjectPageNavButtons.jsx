import React from "react";
import { Button } from "react-bootstrap";

/*  Component to handle contextual navigation within a subject*/
const SubjectPageNavButtons = ({
  handleNextPage,
  handlePreviousPage,
  handleWordDefinition,
}) => {
  return (
    <nav className="subjectPageNav">
      <Button
        bsPrefix="customButton"
        className="backButton"
        onClick={handlePreviousPage}
      >
        Tillbaka
      </Button>
      <Button
        bsPrefix="customButton"
        className="wordButton"
        onClick={handleWordDefinition}
      >
        Ordförklaring
      </Button>
      <Button
        bsPrefix="customButton"
        className="nextButton"
        onClick={handleNextPage}
      >
        Nästa steg
      </Button>
    </nav>
  );
};

export default SubjectPageNavButtons;
