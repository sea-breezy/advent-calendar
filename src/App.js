import logo from "./logo.svg";
import "./App.css";
import Present from "./components/Present";
import Calendar from "./components/Calendar";
import Snowfall from 'react-snowfall'; //React Snowfall package

function App() {
  return (
    <div className="App">
      <h1>CAS in da house</h1>
      <Calendar />
      <Snowfall classname = "snowfall"/>
    </div>
  );
}

export default App;
