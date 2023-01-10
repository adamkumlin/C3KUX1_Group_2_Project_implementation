/* Glaciarer.jsx : 
   
   Outlet for Glaciarer route. All data for the route is handled seperately in SubjectContents.jsx via SubjectPage.jsx

*/

import React from "react";
import { Outlet } from "react-router-dom";
import SubjectsNav from "../Subject/SubjectPageNavStepper";

const Glaciarer = ({ data }) => {
  return (
    <div className="subjectPageWrapper">
      {/* Data is set in App.js / The data is specific to the subject */}
      <SubjectsNav data={data} />
      {/* The outlet renders SubjectPage.jsx component */}
      <Outlet />
    </div>
  );
};

export default Glaciarer;
