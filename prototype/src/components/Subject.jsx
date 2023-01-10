import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Padlock from "../images/padlock.png";

const ChallengeSubject = ({ subject, subjects, setSubjects }) => {
  return (
    <Card
      className={` m-1 ${subject.color} subjectCard`}
      style={{ backgroundColor: `${subject.color}` }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center card--custom">
        <Card.Title className="m-0 ">{subject.name}</Card.Title>
        <div className="challengeStart">
          {subject.open || subject.complete ? (
            <Button as={Link} variant="dark" to={subject.path}>
              {subject.viewed ? "Visa" : "Start"}
            </Button>
          ) : (
            <img src={Padlock} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChallengeSubject;
