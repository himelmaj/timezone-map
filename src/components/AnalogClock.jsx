import { useContext, useState, useEffect } from "react";
import { MapContext } from "../context/mapContext";
import "@styles/AnalogClock.css";
import moment from "moment-timezone";

function AnalogClock() {
  const [clock, setClock] = useState(new Date());
  const { state } = useContext(MapContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(moment().tz(state.currentZone || "UTC").toDate());
    }, 1000);
    return () => clearInterval(interval);
  }, [state]);

  return (
      <div className="clock flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300  ">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${clock.getHours() * 30}deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${clock.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${clock.getSeconds() * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
  );
}

export default AnalogClock;
