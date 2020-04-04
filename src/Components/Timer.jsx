import React, { useContext } from "react";

import {
  TimerContext,
  StartStopContext,
  BreakLengthContext,
  SessionLengthContext
} from "./Store";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SyncIcon from "@material-ui/icons/Sync";

let timerSwitch = null;

const Timer = () => {
  const [timer, setTimer] = useContext(TimerContext);
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [breakLength, setBreakLength] = useContext(BreakLengthContext);
  const [sessionLength, setSessionLength] = useContext(SessionLengthContext);

  let count = timer;

  // Start and stop counting down
  const setCountDown = () => {
    const timeSwitch = !startStop;
    setStartStop(timeSwitch);
    if (timeSwitch) {
      timerSwitch = setInterval(() => {
        if (count > 0) {
          count--;
          setTimer(count);
        }
      }, 1000);
    } else {
      clearInterval(timerSwitch);
    }
  };

  // convert value to time format
  const convertSeconds = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    if (minutes <= 9) {
      minutes = "0" + minutes;
      if (seconds <= 9) {
        seconds = "0" + seconds;
      }
    } else if (seconds <= 9) {
      seconds = "0" + seconds;
    }
    let newValue = minutes + ":" + seconds;

    return newValue;
  };

  // reset the timer
  const resetCountdown = () => {
    clearInterval(timerSwitch);
    setStartStop(false);
    count = 1500;
    setTimer(count);
    setBreakLength(5);
    setSessionLength(25);
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
