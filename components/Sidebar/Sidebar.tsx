"use client";

import { Bot, Settings2 } from "lucide-react";
import React from "react";
import { z } from "zod";
import { Form } from "../ui/Form";
import { InputField } from "../ui/FormInput";
import Chats from "./Chats/Chats";

const Sidebar = () => {
  const searchSchema = z.object({
    search: z.string().min(3),
  });

  const handleSubmit = async (data: z.infer<typeof searchSchema>) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="w-[300px] h-full flex flex-col">
      <div className="flex items-center justify-between rounded-xl px-5 py-2 bg-[#424242]">
        <div className="flex items-center gap-2">
          <Bot size={22} className="text-white" />
          <h3 className="text-white">My Chat</h3>
        </div>
        <div>
          <Settings2 size={22} className="text-white" />
        </div>
      </div>
      <div className="px-5 py-2 bg-[#424242] rounded-xl mt-3 h-full flex flex-col">
        <div>
          <Form schema={searchSchema} onSubmit={handleSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <InputField
                  name="search"
                  type="text"
                  register={register("search")}
                  error={errors?.search}
                  placeholder="Enter search term"
                />
              </>
            )}
          </Form>
        </div>

        <div className="my-3 flex-1">
          <Chats />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
