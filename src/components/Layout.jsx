import "@styles/Layout.css";
import { clockContext, defaultContext } from "@context/clockContext";
import { reducer } from "../context/reducer";
import AsideMenu from "./AsideMenu";
import { useReducer } from "react";

import SimpleMap from "./GoogleMaps";
function Layout() {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  return (
    <clockContext.Provider value={{ state, dispatch }}>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu />
        </aside>
        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full flex items-center justify-center">
          <SimpleMap />
        </main>
      </div>
    </clockContext.Provider>
  );
}

export default Layout;
