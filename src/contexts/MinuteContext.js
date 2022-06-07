import React, { createContext, useState } from "react";

export const MinuteContext = createContext();

export const MinuteProvider = ({ children }) => {
  const [selectedMinute, setSelectedMinute] = useState(null);

  return (
    <MinuteContext.Provider value={{ selectedMinute, setSelectedMinute }}>
      {children}
    </MinuteContext.Provider>
  );
};
