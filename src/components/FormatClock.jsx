import { MapContext } from "../context/mapContext";
import { useContext, useState } from "react";
import { Switch } from "@nextui-org/react";
import { TbNumber12Small } from "react-icons/tb";
import { TbNumber24Small } from "react-icons/tb";

function FormatClock() {
  const { state, dispatch } = useContext(MapContext);
  const [isSelected, setIsSelected] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <TbNumber12Small className="text-zinc-900" />
            ) : (
              <TbNumber24Small />
            )
          }
          onChange={(e) => {
            setIsSelected(e.target.checked);
            dispatch({
              type: "SET_FORMAT",
              payload: e.target.checked ? "12" : "24",
            });
          }}
        />
      </div>
    </>
  );
}

export default FormatClock;
