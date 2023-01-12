import { useParams } from "react-router-dom";
import SubjectContents from "./SubjectContents";

/* SubjectPage.jsx : Layout page for subjects routes */
const SubjectPage = ({ data, subjects, setSubjects }) => {
  /* ID from useParams gets the current route path, this is used in SubjectContents to load data to corresponding page. */
  const { id } = useParams();

  /* If data is not available, render a div with text "loading..." */
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="subjectPage">
      <SubjectContents
        data={data}
        subjects={subjects}
        setSubjects={setSubjects}
        id={id}
      />
    </section>
  );
};

export default SubjectPage;
