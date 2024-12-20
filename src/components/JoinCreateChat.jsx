import React, { useState } from "react";
import chatIcon from "../assets/chat.png";
import { toast } from "react-hot-toast";
import { createRoomApi, joinChatApi } from "../services/RoomService";
import useChatContext from "../context/ChatContext";
import { useNavigate } from "react-router";

const JoinCreateChat = () => {
  const [detail, setDetail] = useState({
    roomId: "",
    userName: "",
  });

  const { setRoomId, setCurrentUser } = useChatContext();
  const navigate = useNavigate();

  // Define the connected state
  const [connected, setConnected] = useState(false);

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

  async function joinChat() {
    if (validateForm()) {
      console.log(detail);
      // Additional logic for joining the chat
      try {
        const room = await joinChatApi(detail.roomId); // Ensure using joinChatApi function
        // console.log(room);
        toast.success("Joined the room successfully");
        // Room has been joined, so do work of joining the chat
        setCurrentUser(detail.userName);
        setRoomId(room.roomId);
        setConnected(true);
        navigate("/chat");
      } catch (error) {
        if(error.response && error.response.status === 400){
          toast.error(error.response.data || "Room not found or invalid");
        } else{
          toast.error("Error in joining the room");
        }
        console.log(error)
      }
    }
  }

  async function createRoom() {
    if (validateForm()) {
      console.log(detail);
      // Call API to create room on backend
      try {
        const response = await createRoomApi(detail.roomId);
        console.log(response);
        toast.success("Room created successfully");
        // Room has been created, so do work of joining the room
        setCurrentUser(detail.userName);
        setRoomId(response.roomId);
        setConnected(true); // Set the connected state
        // Forward to chat page
        navigate("/chat");
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          // Adjusted error handling
          toast.error("Room already exists");
        } else {
          toast.error("Error in creating room");
        }
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
        <div>
          <img src={chatIcon} className="w-24 mx-auto" />
        </div>
        <h1 className="text-2xl font-semibold text-center">
          Join Room / Create Room
        </h1>
        <div>
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
        <div>
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
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={joinChat}
            className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-lg"
          >
            Join Room
          </button>
          <button
            onClick={createRoom}
            className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-lg"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
