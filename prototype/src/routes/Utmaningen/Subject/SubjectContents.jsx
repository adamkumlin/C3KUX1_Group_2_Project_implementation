import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import WordDefinition from "./WordDefinition";
import WellDoneMessage from "./WellDoneMessage";
import SubjectQuiz from "./SubjectQuiz";
import SubjectGraph from "./SubjectGraph";
import SubjectPageNavButtons from "./SubjectPageNavButtons";
import SubjectPageToolbar from "./SubjectPageToolbar";

/* Displays contents for subjects routes */
const SubjectContents = ({ id, data, subjects, setSubjects }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);

  /* Gets the content data for current subject. ID is used to distinguish which part of the object to display. */
  let content = data[id];
  /* Navigate from react router, is used to navigate to a different path. */
  const navigate = useNavigate();
  /* Location from react router, is used to get the current path. */
  let location = useLocation();
  /* Handle complete, updates state and sets complete value to true. */
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

      /* Gets the id of the next subject and adds key of open with value of true. */
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

  /* Get current url */
  let currentPageURL = location.pathname;
  /* Split current url using / */
  let split = currentPageURL.split("/");
  /* Set current page number */
  const currentPageNumber = Number(split[3]);
  /* Set next page number */
  const nextPage = currentPageNumber + 1;
  /* Set previous page number */
  const previousPage = currentPageNumber - 1;
  /* Join the split url again without the page number */
  const joined = split[0] + "/" + split[1] + "/" + split[2];

  /* Set state (showWellDone) to opposite of current value */
  const showWellDoneMessage = () => {
    setShowWellDone(!showWellDone);
  };

  /* Function to handle navigating to next page, or to show well done message */
  const handleNextPage = () => {
    if (nextPage <= 4) {
      navigate(`${joined + "/" + nextPage}`);
    } else if (nextPage === 5) {
      showWellDoneMessage();
    } else {
    }
  };

  /* Function to handle navigating to previous page, or to navigate back to /utmaningen */
  const handlePreviousPage = () => {
    if (previousPage < 5 && previousPage > 0) {
      navigate(`${joined + "/" + previousPage}`);
    } else if (previousPage < 1) {
      navigate("/utmaningen");
    }
  };

  /* Set state (showDefinition) to opposite of current value */
  const handleWordDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  //Return the main contents
  return (
    <>
      {/* WellDoneMessage is conditionally rendered in component using css classes */}
      <WellDoneMessage
        showWellDone={showWellDone}
        handleComplete={handleComplete}
      />
      <SubjectPageToolbar />
      <article className="subjectPageContent">
        {/* WordDefinition is conditionally rendered in component using css classes */}
        <WordDefinition
          handleWordDefinition={handleWordDefinition}
          showDefinition={showDefinition}
        />
        <h1>{content.name}</h1>
        {/* Conditional rendering to show contents based on if a certain property is available */}
        {content.image ? (
          <img className="subjectImage" src={content.image} alt="image" />
        ) : content.question ? (
          <SubjectQuiz content={content} />
        ) : (
          <SubjectGraph dataset={content.dataset} />
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
  );
};

export default SubjectContents;
