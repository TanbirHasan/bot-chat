import Sidebar from "../../components/Sidebar/Sidebar";
import StartChat from "../../components/StartChat/StartChat";

export default function Home() {
  return (
    <div className="h-screen bg-black p-10 py-5">
      <div className="flex items-center gap-5 h-full">
        <Sidebar />
        <StartChat />
      </div>
    </div>
  );
}
