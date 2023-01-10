/* SubjectsNav.jsx : Nav for subjects pages */

import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubjectsNav = ({ data }) => {
  let activeStyle = {
    backgroundColor: "green",
  };
  const location = useLocation();

  let currentPageURL = location.pathname;
  let split = currentPageURL.split("/");
  const currentPageNumber = Number(split[3]);

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
