import React, { useContext, useEffect } from "react";
import { BreakLengthContext, StartStopContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

let Breakcount = 0;

const BreakLength = () => {
  const [breakLength, setBreakLength] = useContext(BreakLengthContext);
  const [startStop, setStartStop] = useContext(StartStopContext);

  useEffect(() => {
    const arrowUp = document.getElementById("break-increment");
    const arrowDown = document.getElementById("break-decrement");

    if (startStop) {
      arrowUp.classList.add("disabled-arrows");
      arrowDown.classList.add("disabled-arrows");
    } else {
      arrowUp.classList.remove("disabled-arrows");
      arrowDown.classList.remove("disabled-arrows");
    }
  });

  const breakIncrement = () => {
    Breakcount = breakLength;
    if (Breakcount < 60) Breakcount++;
    setBreakLength(Breakcount);
  };

  const breakDecrement = () => {
    Breakcount = breakLength;
    if (Breakcount > 1) Breakcount--;
    setBreakLength(Breakcount);
  };

  return (
    <div id="break-container">
      <h3 id="break-label">Break Length</h3>
      <button id="break-increment" onClick={breakIncrement}>
        <ArrowUpwardIcon color="primary" fontSize="large" />
      </button>

      <span id="break-length">{breakLength}</span>
      <button id="break-decrement" onClick={breakDecrement}>
        <ArrowDownwardIcon color="primary" fontSize="large" />
      </button>
    </div>
  );
};

export default BreakLength;
