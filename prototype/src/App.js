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
import Forum from "./routes/Forum/Forum";
import Links from "./routes/Links/Links";
//Challenge sidor
import IntroVideo from "./routes/Challenge/IntroVideo";
import FossilaBranslen from "./routes/Challenge/FossilaBranslen";
import GlobalaTemperaturer from "./routes/Challenge/GlobalaTemperaturer";
import Glaciarer from "./routes/Challenge/Glaciarer";
import Havsnivaer from "./routes/Challenge/Havsnivaer";
import Sammanfattning from "./routes/Challenge/Sammanfattning";
import Spel from "./routes/Challenge/Spel";

import "./App.css";

const data1 = require("./data/data1.json");
const data2 = require("./data/data2.json");
const data3 = require("./data/data3.json");
const data4 = require("./data/data4.json");

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  console.log(isSignedIn);

  return (
    <>
      <NavBar isSignedIn={isSignedIn} />
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsSignedIn={setIsSignedIn} />} />
          <Route element={<ProtectedRoutes isSignedIn={isSignedIn} />}>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/challenge" element={<Challenge />} />
            <Route path="1" element={<IntroVideo />} />
            <Route path="2" element={<FossilaBranslen />} />
            <Route path="3" element={<GlobalaTemperaturer />} />
            <Route path="4" element={<Glaciarer />} />
            <Route path="5" element={<Havsnivaer />} />
            <Route path="6" element={<Sammanfattning />} />
            <Route path="7" element={<Spel />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/links" element={<Links />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
