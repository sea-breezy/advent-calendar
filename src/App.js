import "./App.css";
import Calendar from "./components/Calendar";
import "./music.mp3";
import ReactPlayer from "react-player";
import Snowfall from "react-snowfall"; //React Snowfall package
import { useState, useEffect } from "react";

function App() {
  const date = new Date();
  const day = date.getDate();
  const [dayOfDec] = useState(day);

  useEffect(() => {
    document.title = dayOfDec;
  }, [dayOfDec]);

  return (
    <div className="App">
      <ReactPlayer
        url="https://soundcloud.com/christmasmusicofficial/we-wish-you-a-merry-8?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        width="10%"
        height="10%"
      />
      <header>
        <h1>Advent Calendar of Festive Activities</h1>
      </header>
      <Calendar />
      <Snowfall classname="snowfall" />
    </div>
  );
}

export default App;
