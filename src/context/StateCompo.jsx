import { clockContext } from "./clockContext";
import { useState, useEffect } from "react";
import countriesAndTimezones from 'countries-and-timezones';
import moment from 'moment-timezone';

const StateCompo = ({ children }) => {
  const [countryISO, setCountryISO] = useState('');
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      countryISO.length > 0 ? setClock(moment.tz(countriesAndTimezones.getCountry(countryISO).timezones[0])) : setClock(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <clockContext.Provider value={{clock, setClock, setCountryISO, countryISO}}>
      {children}
    </clockContext.Provider>
  );
};

export default StateCompo;
