import { createContext } from "react";
export const defaultContext = {
  time: new Date(),
  timezone: "America/Mexico_City",
};
export const clockContext = createContext(defaultContext);
