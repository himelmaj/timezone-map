import "@styles/Layout.css";
import StateCompo from "@context/StateCompo";
import AsideMenu from "./AsideMenu";
import Maps from "@components/Maps";
function Layout() {
  return (
    <StateCompo>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
            <AsideMenu />
        </aside>
        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full flex items-center justify-center">
          <Maps />
        </main>
      </div>
    </StateCompo>
  );
}

export default Layout;
