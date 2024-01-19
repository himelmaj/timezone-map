import { useContext } from "react";
import { MapContext } from "../context/mapContext";

function CountryCode() {
  const { state, dispatch } = useContext(MapContext);

  return (
    <>
      {state.country != null &&
        state.country.length > "" &&
        state.code != null &&
        state.code.length > "" && (
          <h1 className="text-gray-50 hover:text-zinc-100 text-center">
            {state.country}, {state.code}
          </h1>
        )}
    </>
  );
}

export default CountryCode;
