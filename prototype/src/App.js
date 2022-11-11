import './App.css';
import { Line } from 'react-chartjs-2';

function App() {

  const data1 = require('./data/data1.json');
  const data2 = require('./data/data2.json');
  const data3 = require('./data/data3.json');
  const data4 = require('./data/data4.json');
  return (
    <div className="App">
      <h1>Climate Change</h1>
      
      <Line data={data1} />
    </div>
  );
}

export default App;
