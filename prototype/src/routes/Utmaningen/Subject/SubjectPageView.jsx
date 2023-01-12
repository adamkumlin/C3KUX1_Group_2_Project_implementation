/* SubjectPageView.jsx : Outlet page for subjects routes */

import React from "react";
import { Outlet } from "react-router-dom";

/* Outlet for routes nested under /subjects */
const SubjectPageView = () => {
  return (
    <>
      <main className="challengeMain">
        <Outlet />
      </main>
    </>
  );
};

export default SubjectPageView;
