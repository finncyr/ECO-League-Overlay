import React from 'react';
import Nash_icon from './Baron_NashorSquare.png';
import './Timers.css';

class TimerNash extends React.Component {

    constructor () {
        super(...arguments);
        this.state = { show: false };
    }

    render(){
        return(
            <div className={this.state.show ? "TimerNash" : "hidden"}>
                <img id="icon" src={Nash_icon} alt="Icon" />
                <h3 id="baron-cd">BARON</h3>
            </div>
        );
    }

    componentDidMount(){
            fetch('https://127.0.0.1:2999/liveclientdata/eventdata')
            //fetch('https://static.developer.riotgames.com/docs/lol/liveclientdata_events.json')
            .then(res => res.json())
            .then(
                result => {
                    const events = result['Events'];
                    for(let i = 0; i < events.length; i++){
                        if (events[i]['EventName'] === "BaronKill"){
                            this.setState({show: true});
                            BaronTimer(3,0);
                            setTimeout(() => {this.setState({show: false});},182000); //183000
                        }
                    }
               }
            )
    }
}

export default TimerNash;

function BaronTimer(minutes, seconds) {
    var time = minutes*60+seconds;
    var interval = setInterval(function(){
        var el = document.getElementById("baron-cd")

        if(time <= 0){
            clearInterval(interval);
            el.innerText = "00:00";
            return false;
        }

        var minutes = Math.floor(time/60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;

        var text = minutes + ":" + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}