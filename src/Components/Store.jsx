import React, { useState } from "react";
import { createContext } from "react";

export const BreakLengthContext = createContext();
export const SessionLengthContext = createContext();
export const TimerContext = createContext();
export const StartStopContext = createContext();

const Store = ({ children }) => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [startStop, setStartStop] = useState(false);

  return (
    <StartStopContext.Provider value={[startStop, setStartStop]}>
      <TimerContext.Provider value={[timer, setTimer]}>
        <SessionLengthContext.Provider
          value={[sessionLength, setSessionLength]}
        >
          <BreakLengthContext.Provider value={[breakLength, setBreakLength]}>
            {children}
          </BreakLengthContext.Provider>
        </SessionLengthContext.Provider>
      </TimerContext.Provider>
    </StartStopContext.Provider>
  );
};

export default Store;
