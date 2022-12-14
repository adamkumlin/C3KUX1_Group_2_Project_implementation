import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LogInForm from "../components/LogInForm.js"
import Title from "../components/Title.js";
import Header from "../components/Header.js";
import backgroundImage from "../images/background-login.jpg";

const Login = ({ setIsSignedIn }) => {
  //Set if the user is signed in or not
  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };
}

function LogIn() {

  return (
    <div className="LogIn">

      <img className="backgroundImage"src={backgroundImage}/>
      
      <Title/>

      <LogInForm/>
  </div>
  );
}

export default LogIn;