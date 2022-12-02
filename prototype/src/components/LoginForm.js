function LoginForm() {

  return (
    <div className="LoginForm">
        <input type={text} placeholder="Användarnamn"/>
        <input type={password} placeholder="Lösenord"/>
    </div>
  );
}

export default LoginForm;