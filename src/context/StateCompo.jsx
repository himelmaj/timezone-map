import { clockContext } from "./clockContext";
import { useState, useEffect } from "react";

const StateCompo = ({ children }) => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <clockContext.Provider value={{clock, setClock}}>{children}</clockContext.Provider>
  );
};

export default StateCompo;
