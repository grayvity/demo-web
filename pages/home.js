import Container from "../components/container";
import SideBar from "../components/sideBar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-pink-600 to-indigo-600 relative overflow-hidden">
      <div className="w-96 h-96 border-white/70 border-2 rounded-full bg-gradient-to-br from-white/70 absolute -top-24 -right-8"></div>
      <div className="w-96 h-96 border-white/70 border-2 rounded-full bg-gradient-to-br from-white/70 absolute -bottom-24 -left-8"></div>
      <div className=" w-[80%] h-[70vh] rounded-xl border-white border-2 flex overflow-hidden">
        <SideBar />
        <Container />
      </div>
    </div>
  );
}
