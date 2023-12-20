import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";
import DateClock from "./DateClock";
function AsideMenu() {
        
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="bg-zinc-900 rounded-lg p-2 flex flex-1 items-center justify-center">
        <DateClock />
      </div> */}
      {/* <div className="bg-zinc-900 rounded-lg p-2 flex items-center justify-center" >
        <DigitalClock />
      </div> */}
      <div className="bg-zinc-900 rounded-lg p-2 h-80 relative flex items-center justify-cente">
        <AnalogClock />
      </div>
    </div>
  );
}

export default AsideMenu;
