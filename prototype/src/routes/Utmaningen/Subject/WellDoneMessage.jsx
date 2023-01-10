import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const WellDoneMessage = ({ alert, showAlert, handleComplete }) => {
  return (
    <div
      className={
        alert ? "subjectCompleteContainer" : "hideSubjectCompleteContainer"
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
