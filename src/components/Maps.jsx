import { useCallback, useContext } from "react";
import WorldMap from "react-svg-worldmap";
import countriesAndTimezones from "countries-and-timezones";
import { MapContext } from "../context/mapContext";
function Maps() {
  const { dispatch } = useContext(MapContext);

  const handleCountry = useCallback(({ countryName, countryCode }) => {
    dispatch({
      type: "SET_COUNTRY",
      payload: {
        country: countryName,
        code: countryCode,
        timezones: countriesAndTimezones.getCountry(countryCode).timezones,
      },
    });
  }, []);

  return (
    <WorldMap
      backgroundColor="transparent"
      color="white"
      borderColor="white"
      size={1200}
      data={[]}
      onClickFunction={handleCountry}
    />
  );
}

export default Maps;
