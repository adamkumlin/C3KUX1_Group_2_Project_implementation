import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* Renders a graph using the recharts library 
   The component is currently hard coded so will only show graphs based on dataset1 and dataset2,
   this should be changed in the future so that a graph is dynamically rendered based on data source.
*/
const SubjectGraph = ({ dataset }) => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const url = `/data/data${dataset}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((loaded) => {
        // console.log("LOADED", loaded);
        setData1(loaded);
      });
  }, []);

  if (dataset === "1") {
    console.log("Dataset", dataset);
    return (
      <div className="graph">
        <LineChart width={700} height={700} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"Year"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Cement"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Gas Flaring"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Gas Fuel"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Liquid Fuel"
            stroke="gray"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Per Capita"
            stroke="purple"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="black"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }

  if (dataset === "3") {
    return (
      <div className="graph">
        <LineChart width={700} height={700} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"Year"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Mean cumulative mass balance"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Number of observations"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
};

export default SubjectGraph;
