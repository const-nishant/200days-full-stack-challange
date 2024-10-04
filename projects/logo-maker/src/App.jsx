import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={() => console.log("selected")} />
      </div>
      <div className="mx-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2 bg-green-200">control panel</div>
        <div className="md:col-span-4 bg-red-100">icon preview</div>
      </div>
    </>
  );
}

export default App;
