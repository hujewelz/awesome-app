import React, { createContext, useContext } from "react";
import { useUserStatus } from "./hook";

const StateContext = createContext(null);

export const StateProvider = ({ children }) => {
  const user = useUserStatus();
  return <StateContext.Provider value={user}>{children}</StateContext.Provider>;
};

export const useSateValue = () => useContext(StateContext);
