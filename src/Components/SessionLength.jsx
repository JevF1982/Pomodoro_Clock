import React, { useContext } from "react";
import { SessionLengthContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SessionLength = () => {
  const [sessionLength, setSessionLength] = useContext(SessionLengthContext);

  const sessionIncrement = () => {
    let count = sessionLength;
    count++;

    setSessionLength(count);
  };
  const sessionDecrement = () => {
    let count = sessionLength;
    if (count > 1) count--;

    setSessionLength(count);
  };

  return (
    <div id="session-container">
      <h3 id="session-label">Session Length</h3>
      <button>
        <ArrowUpwardIcon
          color="primary"
          fontSize="large"
          id="session-increment"
          onClick={sessionIncrement}
        />
      </button>

      <span id="session-length">{sessionLength}</span>
      <button>
        <ArrowDownwardIcon
          color="primary"
          fontSize="large"
          id="session-decrement"
          onClick={sessionDecrement}
        />
      </button>
    </div>
  );
};

export default SessionLength;
