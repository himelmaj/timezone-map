import "@styles/Layout.css";
import StateCompo from "@context/StateCompo";
import AsideMenu from "./AsideMenu";
function Layout() {
  return (
    <StateCompo>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
            <AsideMenu />
        </aside>
        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full"></main>
      </div>
    </StateCompo>
  );
}

export default Layout;