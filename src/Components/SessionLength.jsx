import React, { useContext, useEffect } from "react";
import { SessionLengthContext, TimerContext, StartStopContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SessionLength = () => {
  const [sessionLength, setSessionLength] = useContext(SessionLengthContext);
  const [timer, setTimer] = useContext(TimerContext);
  const [startStop, setStartStop] = useContext(StartStopContext);

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
    let count = sessionLength;
    if (count < 60) count++;

    const newTime = count * 60;

    setTimer(newTime);

    console.log(timer);

    setSessionLength(count);
    console.log("increment" + " " + count);
  };
  const sessionDecrement = () => {
    let count = sessionLength;
    if (count > 1) count--;

    const newTime = count * 60;

    setTimer(newTime);

    setSessionLength(count);
    console.log("decrement" + " " + count);
  };

  return (
    <div id="session-container">
      <h3 id="session-label">Session Length</h3>
      <button id="session-increment">
        <ArrowUpwardIcon
          color="primary"
          fontSize="large"
          onClick={sessionIncrement}
        />
      </button>

      <span id="session-length">{sessionLength}</span>
      <button id="session-decrement">
        <ArrowDownwardIcon
          color="primary"
          fontSize="large"
          onClick={sessionDecrement}
        />
      </button>
    </div>
  );
};

export default SessionLength;
