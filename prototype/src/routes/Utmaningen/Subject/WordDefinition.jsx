import React from "react";
import { AiOutlineClose } from "react-icons/ai";

/* Component which shows a worddefinition in the form of a modal, currently hard coded but should by
   dynamic in the future, as to update definitions according to users current subject or page
*/
const WordDefinition = ({ handleWordDefinition, showDefinition }) => {
  return (
    <div
      /*Conditional rendering, swithces classes onCLick and sets display: none / display: flex */
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
            <b>Fossila bränslen: </b>
            Fossila bränslen är den största källan till utsläpp av växthusgaser
            som bidrar till klimatförändring. Exempel på fossila bränslen är
            kol, bensin, diesel och fossilgas. "
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WordDefinition;
