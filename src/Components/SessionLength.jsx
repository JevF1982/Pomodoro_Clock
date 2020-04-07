import React, { useContext, useEffect } from "react";
import { SessionLengthContext, TimerContext, StartStopContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SessionLength = () => {
  const [sessionLength, setSessionLength] = useContext(SessionLengthContext);
  const [timer, setTimer] = useContext(TimerContext);
  const [startStop, setStartStop] = useContext(StartStopContext);

  let count = sessionLength;

  useEffect(() => {
    const arrowUp = document.getElementById("session-increment");
    const arrowDown = document.getElementById("session-decrement");

    if (startStop) {
      arrowUp.classList.add("disabled-arrows");
      arrowDown.classList.add("disabled-arrows");
    } else {
      arrowUp.classList.remove("disabled-arrows");
      arrowDown.classList.remove("disabled-arrows");
    }
  });

  const sessionIncrement = () => {
    if (count < 60) count++;

    const newTime = count * 60;

    setTimer(newTime);

    setSessionLength(count);
  };
  const sessionDecrement = () => {
    if (count > 1) count--;

    const newTime = count * 60;

    setTimer(newTime);

    setSessionLength(count);
  };

  return (
    <div id="session-container">
      <h3 id="session-label">Session Length</h3>
      <button id="session-increment" onClick={sessionIncrement}>
        <ArrowUpwardIcon color="primary" fontSize="large" />
      </button>

      <span id="session-length">{sessionLength}</span>
      <button id="session-decrement" onClick={sessionDecrement}>
        <ArrowDownwardIcon color="primary" fontSize="large" />
      </button>
    </div>
  );
};

export default SessionLength;
