import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const WordDefinition = ({ handleWordDefinition, showDefinition }) => {
  return (
    <div
      className={
        showDefinition ? "wordDefinitionContainer" : "hideWordDefinition"
      }
    >
      <div className="wordDefinitionClose">
        <AiOutlineClose
          className="closeButton"
          onClick={handleWordDefinition}
        />
      </div>
      <div className="wordDefinitionPage">
        <h2>Ordförklaring</h2>
        <ul>
          <li>
            Klimatet: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, ducimus?
          </li>
          <li>
            Fossila bränslen: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolor, ducimus?
          </li>
        </ul>
        {/* <Button onClick={handleWordDefinition}>Tillbaka</Button> */}
      </div>
    </div>
  );
};

export default WordDefinition;
