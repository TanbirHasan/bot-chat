import React from "react";
import { X, MoreHorizontal, Plus } from "lucide-react";

interface ChatItemProps {
  title: string;
  description: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-700 rounded-md cursor-pointer">
      <div className="space-y-1">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <MoreHorizontal className="text-gray-400" />
    </div>
  );
};

const Chats = () => {
  const chatItems: ChatItemProps[] = [
    {
      title: "Plan a 3-day trip",
      description: "A 3-day trip to see the northern lights in Norway...",
    },
    {
      title: "Ideas for a customer loyalty program",
      description: "Here are seven ideas for a customer loyalty...",
    },
    {
      title: "Help me pick",
      description: "Here are some gift ideas for your fishing-loving...",
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">Chats</h2>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div>
          {chatItems.map((item, index) => (
            <ChatItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <button className="bg-green-500 w-full  hover:bg-green-600 text-white px-3 py-2 rounded-md flex items-center space-x-2 cursor-pointer">
          <Plus className="w-5 h-5" />
          <span>New chat</span>
        </button>
      </div>
    </div>
  );
};

export default Chats;
