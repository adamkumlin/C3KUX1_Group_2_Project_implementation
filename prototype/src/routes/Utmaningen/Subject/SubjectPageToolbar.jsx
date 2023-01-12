import React from "react";
import { Link } from "react-router-dom";
import Audio from "../../../images/audio.png";

/* A simple component to be used for future funtionalities such as text to audio or 
  switching the text to easy-to-read format. */
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
