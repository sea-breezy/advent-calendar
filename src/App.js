import "./App.css";
import Calendar from "./components/Calendar";
import "./music.mp3";
import ReactPlayer from "react-player";
import Snowfall from "react-snowfall"; //React Snowfall package

function App() {
  return (
    <div className="App">
      <ReactPlayer
        url="https://soundcloud.com/christmasmusicofficial/we-wish-you-a-merry-8?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        width="10%"
        height="10%"
      />
      <h1>CAS in da house</h1>
      <Calendar />
      <Snowfall classname="snowfall" />
    </div>
  );
}

export default App;
