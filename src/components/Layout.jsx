import "@styles/Layout.css";
import { reducer } from "../context/reducer";
import { MapContext, defaultMapContext } from "../context/mapContext";
import AsideMenu from "./AsideMenu";
import { useReducer } from "react";
import Maps from "./Maps";
function Layout() {
  const [state, dispatch] = useReducer(reducer, defaultMapContext);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu />
        </aside>
        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full flex items-center justify-center">
          <Maps />
        </main>
      </div>
    </MapContext.Provider>
  );
}

export default Layout;
