import React, { useContext } from "react";

import { TimerContext, StartStopContext } from "./Store";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SyncIcon from "@material-ui/icons/Sync";

let timerSwitch = null;

const Timer = () => {
  const [timer, setTimer] = useContext(TimerContext);
  const [startStop, setStartStop] = useContext(StartStopContext);

  let count = timer;

  // Start and stop counting down
  const setCountDown = () => {
    const timeSwitch = !startStop;
    setStartStop(timeSwitch);

    if (timeSwitch) {
      timerSwitch = setInterval(() => {
        count--;
        setTimer(count);
      }, 1000);
    } else {
      clearInterval(timerSwitch);
    }
  };

  // convert value to time format
  const convertSeconds = count => {
    count = timer;
    let minutes = Math.floor(count / 60);
    let seconds = count - minutes * 60;

    if (minutes <= 9) {
      minutes = "0" + minutes;
    } else if (seconds <= 9) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  };

  // reset the timer
  const resetCountdown = () => {
    clearInterval(timerSwitch);
    setStartStop(false);
    count = 1500;
    setTimer(count);
  };

  return (
    <div id="timer-container">
      <h3 id="timer-label">Session</h3>
      <div id="time-left">{convertSeconds()}</div>
      <button id="start_stop" onClick={setCountDown}>
        <PlayArrowIcon color="primary" />
        <PauseIcon color="primary" />
      </button>
      <button id="reset" onClick={resetCountdown}>
        <SyncIcon color="primary" />
      </button>
    </div>
  );
};

export default Timer;
