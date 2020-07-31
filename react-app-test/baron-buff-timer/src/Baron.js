import React from 'react';
import BaronIcon from './Baron_Nashor_Render.png';
import './Baron.css';

function BaronTimer(minutes, seconds) {
    var time = minutes*60+seconds;
    setInterval(function(){
        var el = document.getElementById("baron-cd")

        var minutes = Math.floor(time/60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;

        var text = minutes + ":" + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}

function Baron(props){
    BaronTimer(3,0);
    return(
        <>
            <div className="baron-buff">
                <div className="baron-buff-notification">
                    <div className="baron-buff-icon">
                        <img src={BaronIcon} alt=""/>
                    </div>
                    <div>
                        <p className="baron-buff-title">BARON BUFF</p>
                        <p className="baron-buff-countdown" id="baron-cd">03:00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Baron;