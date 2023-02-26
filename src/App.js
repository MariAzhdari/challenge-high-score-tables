import React from "react";
import "./App.css";
import allCountryScores from "./scores.js";
import ScoresTable from "./ScoreTable";




const App =() => {
  return (
    <div>
      <h1>This is Table for the high score react Challenge </h1>
      <ScoresTable allCountryScores={allCountryScores} />
    </div>
  );
}
 
export default App;
