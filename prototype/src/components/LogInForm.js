import {Link} from "react-router-dom";

function LogInForm() {

    return (
      <div className="LogInForm">
          <h2>Logga in</h2>
          <div className="inputContainer">
            <label>Användarnamn</label>
            <input type="text" name="password"/>
          </div>
          <div className="inputContainer">
            <label>Lösenord</label>
            <input type="password" name="password"/>
          </div>
          <Link to="/overview"><button>Logga in</button></Link>
      </div>
    );
  }
  
  export default LogInForm;
