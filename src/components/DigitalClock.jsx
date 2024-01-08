import { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/mapContext";
import { data } from "autoprefixer";

function DigitalClock() {
  const { state } = useContext(MapContext);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (state.code && state.currentZone) {
        setClock(
          date.toLocaleString(
            state.code.toLowerCase() + "-" + state.code.toUpperCase(),
            {
              timeZone: state.currentZone,
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: state.format == "12",
            }
          )
        );
      }else{
        setClock(date.toLocaleString());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [state]);
  return (
    <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300">
      <h4 className="text-3xl">{clock.toUpperCase()}</h4>
    </div>
  );
}

export default DigitalClock;
