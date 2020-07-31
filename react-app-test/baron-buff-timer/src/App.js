import React from 'react';
import Overlay from './ECO_Overlay.png';
import './App.css';
import Baron from './Baron.js';

let team_left = 'ECO'
let score_left = '0'
let team_right = 'EKS'
let score_right = '0'

function App() {

  return (
    <div className="App">
      <div className="Overlay">
        <img src={Overlay} alt="Overlay" />

        <div className="team-left">
          <h2>{team_left}</h2>
          <h1>{score_left}</h1>
        </div> 

        <div className="team-right">
          <h2>{team_right}</h2>
          <h1>{score_right}</h1>
        </div>

        <div className="baron-timer">
          <Baron />
        </div>
      </div>
    </div>
  );
}

export default App;
