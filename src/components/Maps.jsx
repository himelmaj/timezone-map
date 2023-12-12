import { useState, useContext } from "react";
import WorldMap from "react-svg-worldmap";
import { countryContext } from "@context/countryContext";
import { clockContext } from "@context/clockContext";

function Maps() {

  const { setCountryISO, countryISO } = useContext(clockContext);
  const [state, setState] = useState({
    cName: "Select Country",
    iso: "",
  });

  const handleCountry = (context) => {
    setState({
      cName: context.countryName,
      iso: context.countryCode,
    });
  };
  setCountryISO(state.iso);


  return (
    <>
      <countryContext.Provider value={state}>
        <WorldMap
          backgroundColor="transparent"
          color="white"
          borderColor="white"
          size={1200}
          data={[]}
          onClickFunction={handleCountry}
        />
        {console.log(countryISO)}
      </countryContext.Provider>
    </>
  );
}

export default Maps;
