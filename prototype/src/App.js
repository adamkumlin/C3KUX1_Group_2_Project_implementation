import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { render } from "react-dom";
import Pacman from "react-pacman";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./routes/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Overview from "./routes/Overview";
import Challenge from "./routes/Challenge/Challenge";
import PartOne from "./routes/Challenge/PartOne";
import Forum from "./routes/Forum/Forum";
import Links from "./routes/Links/Links";

const data1 = require("./data/data1.json");
const data2 = require("./data/data2.json");
const data3 = require("./data/data3.json");
const data4 = require("./data/data4.json");

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  console.log(isSignedIn);

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsSignedIn={setIsSignedIn} />} />
          <Route element={<ProtectedRoutes isSignedIn={isSignedIn} />}>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/challenge" element={<Challenge />}>
              <Route path="partone" element={PartOne} />
            </Route>
            <Route path="/forum" element={<Forum />} />
            <Route path="/links" element={<Links />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
