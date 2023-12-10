import { useContext } from "react";
import { clockContext } from "@context/clockContext";

function DateClock() {
  const { clock } = useContext(clockContext);

  const numberDay = clock.getDate();
  const day = clock.toLocaleString("default", { weekday: "long" });
  const month = clock.toLocaleString("default", { month: "long" });
  const year = clock.getFullYear();

  const capitalizeFirstLetter = (date) => {
    return date.charAt(0).toUpperCase() + date.slice(1);
  }

  const dateFormatted = `${capitalizeFirstLetter(day)} ${numberDay} de ${capitalizeFirstLetter(month)} de ${year}`;

  return (
    <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300">
      <h4 className="">{dateFormatted}</h4>
    </div>
  );
}

export default DateClock;
