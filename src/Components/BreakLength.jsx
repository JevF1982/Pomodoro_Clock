import React, { useContext, useEffect } from "react";
import { BreakLengthContext, StartStopContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

let count = 0;

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
    count = breakLength;

    if (count < 60) count++;
    setBreakLength(count);
  };

  const breakDecrement = () => {
    count = breakLength;

    if (count > 1) count--;
    setBreakLength(count);
  };

  return (
    <div id="break-container">
      <h3 id="break-label">Break Length</h3>
      <button id="break-increment">
        <ArrowUpwardIcon
          color="primary"
          fontSize="large"
          onClick={breakIncrement}
        />
      </button>

      <span id="break-length">{breakLength}</span>
      <button id="break-decrement">
        <ArrowDownwardIcon
          color="primary"
          fontSize="large"
          onClick={breakDecrement}
        />
      </button>
    </div>
  );
};

export default BreakLength;
