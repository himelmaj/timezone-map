import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";
import DateClock from "./DateClock";
import { MapContext } from "../context/mapContext";
import { useContext } from "react";
function AsideMenu() {
  const { state, dispatch } = useContext(MapContext);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <DigitalClock />
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 h-80 relative flex items-center justify-center">
        <AnalogClock />
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <input
          type="text"
          disabled
          className="bg-zinc-900 text-gray-50 hover:text-zinc-100 text-center"
          placeholder="Select a country"
          value={state.country}
        />
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <input
          type="text"
          disabled
          className="bg-zinc-900 text-gray-50 hover:text-zinc-100 text-center"
          placeholder="Select a country"
          value={state.code}
        />
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <select
          value={state.currentZone}
          onChange={(e) =>
            dispatch({
              type: "SET_TIMEZONE",
              payload: e.target.value,
            })
          }
          className="bg-zinc-900 text-gray-50 hover:text-zinc-100 text-center"
        >
          <option value=""></option>

          {state.timezones && state.timezones.map((timezone, index) => {
              return (
                <option key={index} value={timezone}>
                  {timezone}
                </option>
              );
            })}
        </select>
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        <select
          value={state.format}
          onChange={(e) =>
            dispatch({
              type: "SET_FORMAT",
              payload: e.target.value,
            })
          }
          className="bg-zinc-900 text-gray-50 hover:text-zinc-100 text-center"
        >
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}

export default AsideMenu;
