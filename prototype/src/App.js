import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { render } from 'react-dom';
import Pacman from 'react-pacman';

const data1 = require('./data/data1.json');
const data2 = require('./data/data2.json');
const data3 = require('./data/data3.json');
const data4 = require('./data/data4.json');

function App() {

  return (
    <div className="App">
      <LineChart width={700}height={700}data={data1}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Cement" stroke="green" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="Gas Flaring" stroke="blue" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="Gas Fuel" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Liquid Fuel" stroke="gray" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="Per Capita" stroke="purple" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="Total" stroke="black" activeDot={{ r: 8 }}/>

      </LineChart>

      <Pacman />
  </div>
  );
}

export default App;