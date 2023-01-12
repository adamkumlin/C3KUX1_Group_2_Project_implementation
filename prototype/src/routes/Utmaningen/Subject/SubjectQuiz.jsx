import React from "react";

/* Component which renders quiz questions from content data, not fully implemented */
const SubjectQuiz = ({ content }) => {
  return (
    <div>
      <h2>{content.question}</h2>
      <ol>
        <li>{content.options.a}</li>
        <li>{content.options.b}</li>
        <li>{content.options.c}</li>
      </ol>
    </div>
  );
};

export default SubjectQuiz;
