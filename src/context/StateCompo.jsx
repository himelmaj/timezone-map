import { clockContext } from "./clockContext";
import { useState, useEffect } from "react";
import moment from 'moment-timezone';

const StateCompo = ({ children }) => {
  const [timeZone, setTimeZone] = useState('');
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(moment().tz(timeZone).toDate());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeZone]); 
  

  return (
    <clockContext.Provider value={{clock, setClock, timeZone, setTimeZone}}>
      {children}
    </clockContext.Provider>
  );
};

export default StateCompo;
