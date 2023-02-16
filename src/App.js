import "./App.css";
import Calendar from "./components/Calendar";
import ReactPlayer from "react-player";
import Snowfall from "react-snowfall"; //React Snowfall package
import { useState, useEffect } from "react";

function App() {
  const date = new Date();
  const day = date.getDate();
  const [dayOfDec] = useState(day);
  
  console.log("This app will only shows you activities in December and they will be revealed day-by-day :)")

  useEffect(() => {
    document.title = dayOfDec;
  }, [dayOfDec]);

  return (
    <div className="App">
      <ReactPlayer
        url="https://soundcloud.com/christmasmusicofficial/we-wish-you-a-merry-8?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        width="5%"
        height="5%"
      />
      <header>
        <h1 className="shimmer">Advent Calendar of Festive Activities</h1>
      </header>
      <Calendar />
      <Snowfall classname="snowfall" />
    </div>
  );
}

export default App;
