import React, { useContext, useEffect } from "react";

import {
  TimerContext,
  StartStopContext,
  BreakLengthContext,
  SessionLengthContext,
  TypeOfTimerContext,
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
  const [typeOfTimer, setTypeofTimer] = useContext(TypeOfTimerContext);

  let count = timer;

  useEffect(() => {
    const warningBeep = document.getElementById("beep");
    if (count === 0) {
      clearInterval(timerSwitch);
      startInterval();
      getTypeOfTimer();
      warningBeep.play();
    }
  });

  const getTypeOfTimer = () => {
    if (typeOfTimer === "Session" && count === 0) {
      setTypeofTimer("Break");
      count = breakLength * 60;

      setTimer(count);
    } else if (typeOfTimer === "Break" && count === 0) {
      setTypeofTimer("Session");
      count = sessionLength * 60;

      setTimer(count);
    }
  };

  // Start and stop counting down
  const setCountDown = () => {
    const timeSwitch = !startStop;
    setStartStop(timeSwitch);

    if (timeSwitch) {
      startInterval();
    } else {
      clearInterval(timerSwitch);
    }
  };

  const startInterval = () => {
    timerSwitch = setInterval(() => {
      if (count > 0) {
        count--;
        setTimer(count);
      }
    }, 1000);
  };

  // convert value to time format
  const convertSeconds = () => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    if (minutes <= 9) {
      minutes = "0" + minutes;
      if (seconds <= 9) {
        seconds = "0" + seconds;
      }
    } else if (seconds <= 9) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  };

  // reset the timer
  const resetCountdown = () => {
    const warningBeep = document.getElementById("beep");
    clearInterval(timerSwitch);
    setStartStop(false);
    setTypeofTimer("Session");
    setTimer(1500);
    setBreakLength(5);
    setSessionLength(25);
    warningBeep.pause();
    warningBeep.currentTime = 0;
  };

  return (
    <div id="timer-container">
      <h3 id="timer-label">{typeOfTimer}</h3>
      <div id="time-left">{convertSeconds()}</div>
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
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
