import { useContext } from "react";
import { clockContext } from "@context/clockContext";

function DigitalClock() {
  const { clock } = useContext(clockContext);
  return (
    <div className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300">
      <h4 className="text-7xl">{`${clock.toLocaleTimeString()}`}</h4>
    </div>
  );
}

export default DigitalClock;
