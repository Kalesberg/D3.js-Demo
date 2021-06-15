import React from 'react';
import './App.css';
import Chart1 from './components/BarChart';
import Chart2 from './components/Choropleth';
import Data1 from './data/barchart';

function App() {
  return (
    <div className="App">
      <div className="chart chart1">
        <Chart1 data={Data1} />
      </div>
      <div className="chart chart2">
        <Chart2 />
      </div>
      <div className="chart chart3">Chart 3</div>
      <div className="chart chart4">Chart 4</div>
    </div>
  );
}

export default App;
