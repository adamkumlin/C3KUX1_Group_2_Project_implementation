/* SubjectsNav.jsx : Nav for subjects pages */

import React from "react";
import { NavLink, useLocation } from "react-router-dom";

/* A stepper component, to aid the user in identifying at which stage they are currently at within a subjext */
const SubjectsNav = ({ data }) => {
  let activeStyle = {
    backgroundColor: "green",
  };

  /* Location from react router, is used to get the current path. */
  const location = useLocation();
  /* Get current url */
  let currentPageURL = location.pathname;
  /* Split current url using / */
  let split = currentPageURL.split("/");
  /* Set current page number */
  const currentPageNumber = Number(split[3]);

  /* If data is not available, render a div with text "loading..." */
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <header className="subjectHeader">
      <ul className="stepper">
        <li className="stepper__item">
          <NavLink className="stepper__item" to="1">
            <div className="stepper__title"></div>
          </NavLink>
          <div className="stepper__desc">{data[1]?.name}</div>
        </li>
        <li className="stepper__item ">
          <NavLink to="2" className="stepper__item ">
            <div className="stepper__title"></div>
          </NavLink>
          <div className="stepper__desc">{data[2]?.name}</div>
        </li>
        <li className="stepper__item ">
          <NavLink to="3" className="stepper__item">
            <div className="stepper__title"></div>
          </NavLink>
          <div className="stepper__desc">{data[3]?.name}</div>
        </li>
        <li className="stepper__item">
          <NavLink to="4" className="stepper__item">
            <div className="stepper__title"></div>
          </NavLink>
          <div className="stepper__desc">{data[4]?.name}</div>
        </li>
      </ul>
    </header>
  );
};

export default SubjectsNav;
