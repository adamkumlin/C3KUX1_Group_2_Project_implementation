import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Audio from "../../../../images/audio.png";
import WordDefinition from "../../../Utmaningen/Subject/WordDefinition";

const SubjectContents = ({ id, data, subjects, setSubjects }) => {
  const [showDefinition, setShowDefinition] = useState(false);

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
  };

  const [alert, setAlert] = useState(false);

  let content = data[id];
  let location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  // if (!content) {
  //   return <div>Loading...</div>;
  // }

  let currentPageURL = location.pathname;
  let split = currentPageURL.split("/");
  const currentPageNumber = Number(split[3]);
  const nextPage = currentPageNumber + 1;
  const previousPage = currentPageNumber - 1;
  const joined = split[0] + "/" + split[1] + "/" + split[2];
  // console.log("JOINED", joined);

  const showAlert = () => {
    setAlert(!alert);
    // console.log(alert);
  };

  const handleNextPage = () => {
    if (nextPage <= 4) {
      navigate(`${joined + "/" + nextPage}`);
    } else if (nextPage === 5) {
      showAlert();
      // navigate("/utmaningen");
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

  // console.log("PAGE", currentPageNumber);
  // console.log("NEXT PAGE", nextPage);

  return (
    <>
      <section className="subjectPage">
        <div className="subjectTools">
          <div>
            <img src={Audio} alt="" />
          </div>
          <div>
            <Link>Lättläst</Link>
          </div>
        </div>
        {alert ? (
          <div className="alert">
            <span className="closebtn">&times;</span>
            <div className="alertContent">
              <h1>Bra Jobbat!</h1>
              <h2>:D</h2>
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
        ) : showDefinition ? (
          <WordDefinition handleWordDefinition={handleWordDefinition} />
        ) : (
          <>
            <article className="subjectPageContent">
              <h1>{content.name}</h1>
              {content.image ? (
                <img className="subjectImage" src={content.image} alt="image" />
              ) : content.question ? (
                <div>
                  <h2>{content.question}</h2>
                  <ol>
                    <li>{content.options.a}</li>
                    <li>{content.options.b}</li>
                    <li>{content.options.c}</li>
                  </ol>
                </div>
              ) : (
                ""
              )}

              <p className="lead-paragraph">{content.ingress}</p>
              <p className="content">{content.content}</p>
            </article>

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
          </>
        )}
      </section>
    </>
  );
};

export default SubjectContents;
