import React, { useState } from "react";
import chatIcon from "../assets/chat.png";
import { toast } from "react-hot-toast";
import { createRoomApi } from "../services/RoomService";
const JoinCreateChat = () => {
  const [detail, setDetail] = useState({
    roomId: "",
    userName: "",
  });

  function handleFormInputChange(event) {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  }

  function validateForm() {
    if (detail.userName.trim() === "" || detail.roomId.trim() === "") {
      toast.error("Please fill all the fields");
      return false;
    }
    return true;
  }
  function joinChat() {
    if (validateForm()) {
      console.log(detail);
      // toast.success("Joined the room successfully");
      
    }
  }
  async function createRoom() {
    if (validateForm()) {
      console.log(detail);
      
      // call api to create room on backend
      try {
        const response = await createRoomApi(detail.roomId);
        console.log(response);
        toast.success("Room created successfully");
        joinChat();
      } catch (error) {
        console.log(error);
        if (error.response.status === 500) {
          toast.error("Room already exists");
        } else {
          toast.error("Error in creating room");
        }
      }
    }
  }

  return (
    // border
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
        <div>
          <img src={chatIcon} className="w-24 mx-auto" />
        </div>
        <h1 className="text-2xl font-semibold text-center">
          Join Room / Create Room
        </h1>
        {/* create a form */}
        {/* name div  */}
        <div className="">
          <label htmlFor="name" className="block font-medium mb-2">
            Your name
          </label>
          <input
            onChange={handleFormInputChange}
            value={detail.userName}
            name="userName"
            placeholder="Enter your name"
            type="text"
            id="name"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* room id div  */}
        <div className="">
          <label htmlFor="roomId" className="block font-medium mb-2">
            Room ID / New Room ID
          </label>
          <input
            onChange={handleFormInputChange}
            value={detail.roomId}
            name="roomId"
            placeholder="Enter the room id"
            type="text"
            id="roomId"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* button */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={joinChat}
            className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-lg"
          >
            Join Room
          </button>
          <button onClick={createRoom} className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-lg">
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
