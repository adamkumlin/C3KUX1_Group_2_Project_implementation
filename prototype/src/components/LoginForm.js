function LogInForm() {

  return (
    <div className="LogInForm">
        <h2>Logga in</h2>
        <label>Användarnamn<input type="text" name="password"/></label> 
        <label>Lösenord<input type="password" name="password"/></label>
        <button>Logga in</button>
    </div>
  );
}

export default LogInForm;