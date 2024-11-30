"use client";

import React from "react";
import { z } from "zod";

import { Bookmark, BookAudio, Languages } from "lucide-react";
import { Form } from "../ui/Form";
import { InputField } from "../ui/FormInput";

const StartChat = () => {
  const chatSchema = z.object({
    chat: z.string().min(3),
  });

  const handleSubmit = (data: z.infer<typeof chatSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md w-full h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">How can i help you today?</h2>
        <div className="flex space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Bookmark className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <BookAudio className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Languages className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Form schema={chatSchema} onSubmit={handleSubmit}>
        {({ register, formState: { errors } }) => (
          <>
            <InputField
              name="chat"
              type="text"
              register={register("chat")}
              error={errors?.chat}
              placeholder="Enter Message"
            />
          </>
        )}
      </Form>

      <div className="grid grid-cols-5 gap-4 mt-6">
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          All
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Text
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Image
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Video
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Music
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Analytics
        </button>
      </div>
    </div>
  );
};

export default StartChat;
