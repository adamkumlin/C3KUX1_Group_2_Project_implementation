import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useState, useEffect } from "react";

import "./App.css";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Root layout
import RootLayout from "./components/RootLayout";

//Routes / Pages
import Overview from "./routes/Overview/Overview";
import Forum from "./routes/Forum/Forum";
import MinskaKlimatpaverkan from "./routes/MinskaKlimatpaverkan/MinskaKlimatpaverkan";
import SubjectPageView from "./routes/Utmaningen/Subject/SubjectPageView";
import Login from "./routes/Login/Login";
import IntroVideo from "./routes/Utmaningen/Subjects/IntroVideo";
import FossilaBranslen from "./routes/Utmaningen/Subjects/FossilaBranslen";
import Glaciarer from "./routes/Utmaningen/Subjects/Glaciarer";
import ChallengeOverview from "./routes/Utmaningen/Subjects/ChallengeOverview";
import SubjectPage from "./routes/Utmaningen/Subject/SubjectPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [data, setData] = useState([]);
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Intro video",
      path: "/subjects/video",
      color: "#cb8c8c",
      complete: true,
      viewed: false,
    },
    {
      id: 2,
      name: "Fossila bränslen",
      path: "/subjects/fossilabranslen/1",
      color: "#cba08c",
      complete: false,
      viewed: false,
    },
    {
      id: 3,
      name: "Glaciärer",
      path: "/subjects/glaciarer/1",
      color: "#d8c196",
      complete: false,
      viewed: false,
    },
    {
      id: 4,
      name: "Globala Temperaturer",
      path: "/amnen/globalatemperaturer",
      color: "#b1d4da",
      complete: false,
      viewed: false,
    },
    {
      id: 5,
      name: "Havsnivåer",
      path: "/amnen/havsnivaer",
      color: "#a1bdcd",
      complete: false,
      viewed: false,
    },
    {
      id: 6,
      name: "Tips på mer info",
      path: "/amnen/tips",
      color: "#7f8e97",
      complete: false,
      viewed: false,
    },
    {
      id: 7,
      name: "Spel",
      path: "/amnen/spel",
      color: "#7f8e97",
      complete: false,
      viewed: false,
    },
  ]);

  useEffect(() => {
    const url = "/data/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((loaded) => {
        // console.log("FETCH", loaded);
        setData(loaded);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout isSignedIn={isSignedIn} subjects={subjects} />}
      >
        <Route index element={<Login />} />
        <Route path="overview" element={<Overview />}></Route>
        <Route path="/forum" element={<Forum />} />
        <Route
          path="/minskaklimatpaverkan"
          element={<MinskaKlimatpaverkan />}
        />
        <Route
          path="/utmaningen"
          element={<ChallengeOverview subjects={subjects} />}
        />
        <Route path="/subjects" element={<SubjectPageView />}>
          <Route
            path="video"
            element={
              <IntroVideo subjects={subjects} setSubjects={setSubjects} />
            }
          />
          <Route
            path="fossilabranslen"
            element={<FossilaBranslen data={data[0]} />}
          >
            <Route
              path=":id"
              element={
                <SubjectPage
                  subjects={subjects}
                  setSubjects={setSubjects}
                  data={data[0]}
                />
              }
            />
          </Route>
          <Route path="glaciarer" element={<Glaciarer data={data[1]} />}>
            <Route
              path=":id"
              element={
                <SubjectPage
                  subjects={subjects}
                  setSubjects={setSubjects}
                  data={data[1]}
                />
              }
            />
          </Route>
        </Route>
      </Route>
    )
  );

  // if (!subjects) <div>Loading...</div>;
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
