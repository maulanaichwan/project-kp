import './App.css';
import powerMeterData from './mqtt-data/subs';

function App() {
  console.log(powerMeterData);
  return (
    <div className="App">
      <h1>{powerMeterData}</h1>
      <h2>hai</h2>
    </div>
  );
}

export default App;
