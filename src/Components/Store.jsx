import React, { useState } from "react";
import { createContext } from "react";

export const BreakLengthContext = createContext();
export const SessionLengthContext = createContext();
export const TimerContext = createContext();
export const StartStopContext = createContext();
export const TypeOfTimerContext = createContext();

const Store = ({ children }) => {
  const [breakLength, setBreakLength] = useState(1);
  const [sessionLength, setSessionLength] = useState(1);
  const [timer, setTimer] = useState(60);
  const [startStop, setStartStop] = useState(false);
  const [typeOfTimer, setTypeOfTimer] = useState("Session");

  return (
    <TypeOfTimerContext.Provider value={[typeOfTimer, setTypeOfTimer]}>
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
    </TypeOfTimerContext.Provider>
  );
};

export default Store;
