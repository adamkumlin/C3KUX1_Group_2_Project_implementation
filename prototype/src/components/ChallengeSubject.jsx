import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ChallengeSubject = ({ subject }) => {
  console.log(subject.color);
  return (
    <Card
      className={` m-1 ${subject.color}`}
      style={{ backgroundColor: `${subject.color}` }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center card--custom">
        <Card.Title className="m-0 ">{subject.name}</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}

        {subject.complete ? (
          //   <Button as="Link" to={subject.path} variant="dark">
          //     Start
          //   </Button>
          <Link to={subject.path}>Start</Link>
        ) : (
          "Locked"
        )}
      </Card.Body>
    </Card>
  );
};

export default ChallengeSubject;
