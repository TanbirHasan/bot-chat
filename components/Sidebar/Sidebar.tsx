import { Bot, Settings2 } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[300px]">
      <div className="flex items-center justify-between rounded-lg px-5 py-2 bg-[#424242]">
        <div className="flex items-center gap-2">
          <Bot size={30} className="text-white" />
          <h3 className="text-white">My Chat</h3>
        </div>
        <div>
          <Settings2 size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
