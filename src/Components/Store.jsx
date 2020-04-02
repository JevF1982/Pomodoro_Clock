import React, { useState } from "react";
import { createContext } from "react";

export const BreakLengthContext = createContext();

const Store = ({ children }) => {
  const [breakLength, setBreakLength] = useState(5);

  return (
    <BreakLengthContext.Provider value={[breakLength, setBreakLength]}>
      {children}
    </BreakLengthContext.Provider>
  );
};

export default Store;
