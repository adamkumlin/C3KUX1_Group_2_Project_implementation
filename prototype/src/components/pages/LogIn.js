import LogInForm from "../LogInForm.js";
import Title from "../Title.js";
import Header from "../Header.js";
import backgroundImage from "../../images/background-login.jpg";
// Importerar tre komponenter och en bild.

function LogIn() {
// Skapar en komponent.

  return (
    <div className="LogIn">
      <Header/>

      <img className="backgroundImage"src={backgroundImage}/>
      
      <Title/>

      <LogInForm/>
  </div>
  );
}
// Placerar tre komponenter och en bild.

export default LogIn;
// Exporterar komponenten som "LogIn".