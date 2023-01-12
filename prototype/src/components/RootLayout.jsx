import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

/* Root Layout
NavBar is a constant element which is alwas visible.
All routes in App.js are rendered through this Outlet.
*/
const RootLayout = ({ subjects }) => {
  return (
    <>
      <NavBar subjects={subjects} />
      <Outlet />
    </>
  );
};

export default RootLayout;
