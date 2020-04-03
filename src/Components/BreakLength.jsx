import React, { useContext } from "react";
import { BreakLengthContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const BreakLength = () => {
  const [breakLength, setBreakLength] = useContext(BreakLengthContext);

  const breakIncrement = () => {
    let count = breakLength;
    count++;

    setBreakLength(count);
  };
  const breakDecrement = () => {
    let count = breakLength;
    if (count > 1) count--;

    setBreakLength(count);
  };

  return (
    <div id="break-container">
      <h3 id="break-label">Break Length</h3>
      <button>
        <ArrowUpwardIcon
          color="primary"
          fontSize="large"
          id="break-increment"
          onClick={breakIncrement}
        />
      </button>

      <span id="break-length">{breakLength}</span>
      <button>
        <ArrowDownwardIcon
          color="primary"
          fontSize="large"
          id="break-decrement"
          onClick={breakDecrement}
        />
      </button>
    </div>
  );
};

export default BreakLength;
