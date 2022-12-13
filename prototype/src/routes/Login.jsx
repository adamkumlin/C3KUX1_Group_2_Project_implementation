import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsSignedIn }) => {
  //Set if the user is signed in or not
  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <div>
      <h1>login</h1>
      {/* Link us used instead of button, can be styled to look like button */}
      <Link as="button" to="/overview" onClick={signin}>
        Sign In
      </Link>
    </div>
  );
};

export default Login;
