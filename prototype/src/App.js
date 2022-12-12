import LogIn from "./components/pages/LogIn.js";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<LogIn />} />
      </Routes>
  </div>
  );
}

export default App;