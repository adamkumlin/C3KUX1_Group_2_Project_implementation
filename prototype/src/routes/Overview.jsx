import React from "react";
import { Link, Outlet } from "react-router-dom";

const overview = () => {
  return (
    <>
      <Link to="/challenge">Challenge</Link>
      <Link to="/links">Links</Link>
      <Link to="/forum">Forum</Link>
    </>
  );
};

export default overview;
