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
import MinskaKlimatpaverkan from "./routes/Minska_klimatpaverkan/MinskaKlimatpaverkan";
//Challenge sidor
import IntroVideo from "./routes/Challenge/IntroVideo";
import FossilaBranslen from "./routes/Challenge/FossilaBranslen";
import GlobalaTemperaturer from "./routes/Challenge/GlobalaTemperaturer";
import Glaciarer from "./routes/Challenge/Glaciarer";
import Havsnivaer from "./routes/Challenge/Havsnivaer";
import Sammanfattning from "./routes/Challenge/Sammanfattning";
import Spel from "./routes/Challenge/Spel";
import ChallengeOverview from "./routes/Challenge/ChallengeOverview";

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
            <Route path="/overview" element={<Overview />} />
            <Route path="/" element={<Challenge />}>
              <Route path="challenge" element={<ChallengeOverview />} />
              <Route path="/video" element={<IntroVideo />} />
              <Route path="/fossilabranslen" element={<FossilaBranslen />} />
              <Route
                path="/globalatemperaturer"
                element={<GlobalaTemperaturer />}
              />
              <Route path="/glaciarer" element={<Glaciarer />} />
              <Route path="/havsnivaer" element={<Havsnivaer />} />
              <Route path="/tips" element={<Sammanfattning />} />
              <Route path="/spel" element={<Spel />} />
            </Route>
            <Route path="/forum" element={<Forum />} />
            <Route
              path="/minskaklimatpaverkan"
              element={<MinskaKlimatpaverkan />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
