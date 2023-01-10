/* SubjectContents.jsx : Displays contents for subjects routes */

import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import WordDefinition from "./WordDefinition";
import WellDoneMessage from "./WellDoneMessage";
import SubjectQuiz from "./SubjectQuiz";
import SubjectGraph from "./SubjectGraph";
import SubjectPageNavButtons from "./SubjectPageNavButtons";
import SubjectPageToolbar from "./SubjectPageToolbar";

const SubjectContents = ({ id, data, subjects, setSubjects }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [alert, setAlert] = useState(false);

  //Gets the content data for current subject. ID is used to distinguish which part of the object to display.
  let content = data[id];
  //Navigate from react router, is used to navigate to a different path.
  const navigate = useNavigate();
  //Location from react router, is used to get the current path.
  let location = useLocation();

  //Handle complete, updates state and sets complete value to true.
  const handleComplete = () => {
    const id = subjects[1].id;
    const updateSubject = subjects.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          complete: true,
          viewed: true,
        };
      }

      //Gets the id of the next subject and adds key of open with value of true.
      if (subject.id === id + 1) {
        return {
          ...subject,
          open: true,
        };
      } else {
        return subject;
      }
    });
    setSubjects(updateSubject);
    console.log("SUBJECTS", subjects);
  };

  let currentPageURL = location.pathname;
  let split = currentPageURL.split("/");
  const currentPageNumber = Number(split[3]);
  const nextPage = currentPageNumber + 1;
  const previousPage = currentPageNumber - 1;
  const joined = split[0] + "/" + split[1] + "/" + split[2];

  const showAlert = () => {
    setAlert(!alert);
  };

  const handleNextPage = () => {
    if (nextPage <= 4) {
      navigate(`${joined + "/" + nextPage}`);
    } else if (nextPage === 5) {
      showAlert();
    } else {
    }
  };

  const handlePreviousPage = () => {
    if (previousPage < 5 && previousPage > 0) {
      navigate(`${joined + "/" + previousPage}`);
    } else if (previousPage < 1) {
      navigate("/utmaningen");
    }
  };

  const handleWordDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  //Return the main contents
  return (
    <>
      <WellDoneMessage
        alert={alert}
        showAlert={showAlert}
        handleComplete={handleComplete}
      />
      <SubjectPageToolbar />
      <article className="subjectPageContent">
        <WordDefinition
          handleWordDefinition={handleWordDefinition}
          showDefinition={showDefinition}
        />
        <h1>{content.name}</h1>
        {content.image ? (
          <img className="subjectImage" src={content.image} alt="image" />
        ) : content.question ? (
          <SubjectQuiz content={content} />
        ) : (
          <SubjectGraph />
        )}

        <p className="lead-paragraph">{content.ingress}</p>
        <p className="content">{content.content}</p>
      </article>

      <SubjectPageNavButtons
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleWordDefinition={handleWordDefinition}
      />
    </>
    // <>
    //   {alert ? (
    //     <WellDoneMessage
    //       alert={alert}
    //       showAlert={showAlert}
    //       handleComplete={handleComplete}
    //     />
    //   ) : (
    //     <>
    //       <SubjectPageToolbar />
    //       <article className="subjectPageContent">
    //         <WordDefinition
    //           handleWordDefinition={handleWordDefinition}
    //           showDefinition={showDefinition}
    //         />
    //         <h1>{content.name}</h1>
    //         {content.image ? (
    //           <img className="subjectImage" src={content.image} alt="image" />
    //         ) : content.question ? (
    //           <SubjectQuiz content={content} />
    //         ) : (
    //           <SubjectGraph />
    //         )}

    //         <p className="lead-paragraph">{content.ingress}</p>
    //         <p className="content">{content.content}</p>
    //       </article>

    //       <SubjectPageNavButtons
    //         handleNextPage={handleNextPage}
    //         handlePreviousPage={handlePreviousPage}
    //         handleWordDefinition={handleWordDefinition}
    //       />
    //     </>
    //   )}
    // </>
  );
};

export default SubjectContents;
