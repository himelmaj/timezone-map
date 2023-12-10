import React, { useId, useState, useEffect } from "react";
import { getTimeZones } from "../api/time.api";
function Filters() {
  const timeZone = useId();
  const [timeZones, setTimeZones] = useState([]);

//   const handleChangeTimeZone = (event) => {
//     onChange((prevState) => ({
//       ...prevState,
//       timeZone: event.target.value,
//     }));
//   };

  useEffect(() => {
    async function fetchTimeZones() {
      const timeZones = await getTimeZones();
      setTimeZones(timeZones);
    }
    fetchTimeZones();
  }, []);

  return (
    <select id={timeZone} className="">
        <option value="">Select a time zone</option>
        {timeZones.map((timeZone, index) => {
            return (
            <option key={index} value={timeZone}>
                {timeZone}
            </option>
            );
        })}

    </select>
  );
}

export default Filters;
