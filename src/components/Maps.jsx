import { useState, useContext, useEffect } from "react";
import WorldMap from "react-svg-worldmap";
import { countryContext } from "@context/countryContext";
import { clockContext } from "@context/clockContext";
import countriesAndTimezones from "countries-and-timezones";

function Maps() {
  const { setTimeZone, timeZone } = useContext(clockContext);
  const [state, setState] = useState({
    cName: "Select Country",
    iso: "",
    timezones: "",
  });

  const handleCountry = (context) => {
    setState({
      cName: context.countryName,
      iso: context.countryCode,
      timezones: countriesAndTimezones.getCountry(context.countryCode)
        .timezones[0],
    });
  };

  useEffect(() => {
    setTimeZone(state.timezones);
  }, [state.timezones]);

  
  return (
    <countryContext.Provider value={state}>
      <WorldMap
        backgroundColor="transparent"
        color="white"
        borderColor="white"
        size={1200}
        data={[]}
        onClickFunction={handleCountry}
      />
      {console.log(timeZone)}
    </countryContext.Provider>
  );
}

export default Maps;
