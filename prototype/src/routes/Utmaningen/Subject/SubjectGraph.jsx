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

const SubjectGraph = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const url = "/data/data1.json";
    fetch(url)
      .then((res) => res.json())
      .then((loaded) => {
        console.log(loaded);
        setData1(loaded);
      });
  }, []);

  return (
    <div className="graph">
      <LineChart width={700} height={700} data={data1}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
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
};

export default SubjectGraph;
