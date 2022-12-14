import LogInForm from "../LogInForm.js";
import Title from "../Title.js";
import Header from "../Header.js";
import backgroundImage from "../../images/background-login.jpg";

function LogIn() {

  return (
    <div className="LogIn">
      <Header/>

      <img className="backgroundImage"src={backgroundImage}/>
      
      <Title/>

      <LogInForm/>
  </div>
  );
}

export default LogIn;