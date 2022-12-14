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
          <button>Logga in</button>
      </div>
    );
  }
  
  export default LogInForm;
