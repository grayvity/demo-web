import Cards from "./cards";
import Dashboard from "./dashboard";
import History from "./history";
import NewTran from "./newtran";

export default function Container() {
  return (
    <div className=" w-full h-full bg-slate-100 flex">
      <div className="flex flex-col w-full h-full p-4">
        <Cards />
        <History />
      </div>
      <div className="flex flex-col w-full h-full p-4">
        <Dashboard />
        <NewTran />
      </div>
    </div>
  );
}
