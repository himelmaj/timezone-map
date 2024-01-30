import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";
import CountryCode from "./CountryCode";
import FormatClock from "./FormatClock";
import { useState } from "react";
import { MapContext } from "../context/mapContext";
import { useContext } from "react";

// import { Switch } from "@nextui-org/react";
// import { TbNumber12Small } from "react-icons/tb";
// import { TbNumber24Small } from "react-icons/tb";

function AsideMenu() {
  const { state, dispatch } = useContext(MapContext);
  // const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <DigitalClock />
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 h-80 relative flex items-center justify-center">
        <AnalogClock />
      </div>

      {state.country != null &&
        state.country.length > "" &&
        state.code != null &&
        state.code.length > "" && (
          <>
            <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
              {/* {state.country != null && state.country.length > "" && state.code != null && state.code.length > "" ? 
              (<h1 className="text-gray-50 hover:text-zinc-100 text-center"> {state.country}, {state.code} </h1>): 
              (<h1 className="text-gray-50 hover:text-zinc-100 text-center"> Select a country </h1>)
              } */}
              <CountryCode />
            </div>

            <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
              <select
                value={state.currentZone}
                onChange={(e) =>
                  dispatch({ type: "SET_TIMEZONE", payload: e.target.value })
                }
                className="bg-zinc-900 text-gray-50 hover:text-zinc-100 text-center"
              >
                <option value=""></option>

                {state.timezones &&
                  state.timezones.map((timezone, index) => {
                    return (
                      <option key={index} value={timezone}>
                        {timezone}
                      </option>
                    );
                  })}
              </select>
            </div>

            {state.currentZone != null && state.currentZone.length > "" && (
              <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
                {/* <div className="flex flex-col gap-2">
              <Switch
                defaultSelected
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected }) =>
                  isSelected ? (
                    <TbNumber12Small className="text-zinc-900" />
                  ) : (
                    <TbNumber24Small />
                  )
                }
                onChange={(e) => {
                  setIsSelected(e.target.checked);
                  dispatch({
                    type: "SET_FORMAT",
                    payload: e.target.checked ? "12" : "24",
                  });
                }}
              />
            </div> */}

                <FormatClock />
              </div>
            )}
          </>
        )}
    </div>
  );
}

export default AsideMenu;
