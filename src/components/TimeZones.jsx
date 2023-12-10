import { useState, useEffect } from "react";
import { getTimeZones } from "../api/time.api";

export default function TimeZones() {
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    async function fetchTimeZones() {
      const timeZones = await getTimeZones();
      setTimeZones(timeZones);
    }
    fetchTimeZones();
  }, []);
  return (
    <div className="flex-col flex overflow-y-auto text-zinc-400 px-2">
      {timeZones.map((timeZone, index) => {
        return (
            <label key={index} className="hover:text-zinc-100">
              <input type="radio" name="TimeZone" id={timeZone} />
              {` ${timeZone}`}
              <br />
            </label>
            
        );
      })}
    </div>
  );
}
