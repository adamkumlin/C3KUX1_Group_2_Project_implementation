import React from "react";
import { Link } from "react-router-dom";
import Audio from "../../../images/audio.png";

const SubjectPageToolbar = () => {
  return (
    <div className="subjectpageToolBar">
      <div>
        <img src={Audio} alt="" />
      </div>
      <div>
        <Link>Lättläst</Link>
      </div>
    </div>
  );
};

export default SubjectPageToolbar;
