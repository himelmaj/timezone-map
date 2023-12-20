import { useContext, useEffect, useState } from "react";
import { clockContext } from "@context/clockContext";
import moment from "moment-timezone";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const { state } = useContext(clockContext);

  useEffect(() => {
      const timerId = setInterval(() => {
          setTime(moment().tz(state.currentZone || "UTC").toDate());
      }, 1000);

      return () => clearInterval(timerId);
  }, [state]);
  return (
    <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300">
      <h4 className="text-7xl">{`${time.toLocaleTimeString()}`}</h4>
    </div>
  );
}

export default DigitalClock;
