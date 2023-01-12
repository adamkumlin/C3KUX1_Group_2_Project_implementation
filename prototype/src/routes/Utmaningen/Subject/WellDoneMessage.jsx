import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

/* Component to display well done message when a suject is completed */
const WellDoneMessage = ({ showWellDone, handleComplete }) => {
  return (
    /*Conditional rendering, swithces classes onCLick and sets display: none / display: flex */
    <div
      className={
        showWellDone
          ? "subjectCompleteContainer"
          : "hideSubjectCompleteContainer"
      }
    >
      <div className="subjectCompletePage">
        <h2>Bra jobbat!</h2>
        <h3>Du har lärt dig om fossila bränslen</h3>
        <Button
          variant="secondary"
          onClick={handleComplete}
          as={Link}
          to="/utmaningen"
        >
          Tillbaka till utmaningen
        </Button>
      </div>
    </div>
  );
};

export default WellDoneMessage;
