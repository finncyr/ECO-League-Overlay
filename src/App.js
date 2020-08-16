import React from 'react';
import Overlay from './ECO_Overlay.png';
import './App.css';
//import Baron from './Baron.js';
import GameData from './GameData.json';
import got from 'got';

//var baron_active = false;

function App() {


  //TODO: Put this into component and realise async updates
  async Baron() {
    const init_spawn = 1200; //seconds
    var timer = document.getElementsByClassName("baron-timer-time");
  
    (async () => {
      const body = await got.get('https://127.0.0.1:2999/liveclientdata/gamestats').json();
  
      timer.innerText = (init_spawn - body.gameTime).toString();
    })();
  
  }

  return (
    <div className="App">
      <div className="Overlay">
        <img src={Overlay} alt="Overlay" />

        <div className="team-left">
          <h2>{GameData.kuerzel_left}</h2>
          <h1>{GameData.score_left}</h1>
        </div> 

        <div className="team-right">
          <h2>{GameData.kuerzel_right}</h2>
          <h1>{GameData.score_right}</h1>
        </div>

        <div className="baron-timer">
          <h2 id="baron-timer-time">00:00</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
