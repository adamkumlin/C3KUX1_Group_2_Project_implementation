import { Link } from "react-router-dom";

// Importerar "Link" från "react-router-dom".

function LogInForm({ signin }) {
  // Skapar en komponent.

  const handleSignIn = () => {
    signin();
  };

  return (
    <div className="LogInForm">
      <h2>Logga in</h2>
      <div className="inputContainer">
        <label>Användarnamn</label>
        <input type="text" name="password" />
      </div>
      <div className="inputContainer">
        <label>Lösenord</label>
        <input type="password" name="password" />
      </div>

      <Link to="/overview">
        <button>Logga in</button>
      </Link>
    </div>
  );
}
// Skapar ett h2-element, några labels, några inputs och ett button-element nestad i en Link-komponent.

export default LogInForm;
// Exporterar komponenten som "LogInForm".
