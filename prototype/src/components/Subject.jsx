import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Padlock from "../images/padlock.png";

/* Subject component which is rendered on the page Utmaningen*/
const ChallengeSubject = ({ subject }) => {
  return (
    <Card
      className={` m-1 ${subject.color} subjectCard`}
      style={{ backgroundColor: `${subject.color}` }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center card--custom">
        <Card.Title className="m-0 ">{subject.name}</Card.Title>
        <div className="challengeStart">
          {/* 
          Conditional rendering, if subject is open for the user or if it is completed a button will appear.
          If the subject has been viewed a button with "Visa" will be rendered, otherwise it will say "Start".
          */}
          {subject.open || subject.complete ? (
            <Button as={Link} variant="dark" to={subject.path}>
              {subject.viewed ? "Visa" : "Start"}
            </Button>
          ) : (
            /* If the subject isn't open or copleted a padlock will be rendered. */
            <img src={Padlock} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChallengeSubject;
