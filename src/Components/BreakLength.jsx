import React, { useContext } from "react";
import { BreakLengthContext } from "./Store";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const BreakLength = () => {
  const [breakLength, setBreakLength] = useContext(BreakLengthContext);

  return (
    <div id="break-container">
      <h3 id="break-label">Break Length</h3>
      <span>
        <ArrowUpwardIcon color="primary" fontSize="large" />
      </span>
      <span id="breaklength-display">{breakLength}</span>
      <span>
        <ArrowDownwardIcon color="primary" fontSize="large" />
      </span>
    </div>
  );
};

export default BreakLength;
