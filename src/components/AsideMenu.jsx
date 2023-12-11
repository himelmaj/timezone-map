import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";
import DateClock from "./DateClock";
import TimeZones from "./TimeZones";
import Filters from "./Filters";
function AsideMenu() {
        
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <DateClock />
      </div>
      <div className="bg-zinc-900 rounded-lg p-2">
        <DigitalClock />
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 h-80">
        <AnalogClock />
      </div>
      {/* <div className="bg-zinc-900 rounded-lg p-2  ">
        <Filters />
      </div> */}
    </div>
  );
}

export default AsideMenu;
