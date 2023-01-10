import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = ({ isSignedIn, subjects }) => {
  return (
    <>
      <NavBar isSignedIn={isSignedIn} subjects={subjects} />
      <Outlet />
    </>
  );
};

export default RootLayout;
