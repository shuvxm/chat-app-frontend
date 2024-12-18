import React, { useRef, useState } from "react";
import { MdAttachFile, MdSend } from "react-icons/md";
import Img1 from "../assets/i3.jpg";
import Img2 from "../assets/i12.jpg";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      content: "Hey",
      sender: "Shubham",
    },
    {
      content: "hii",
      sender: "Simran",
    },
    {
      content: "I love you sim♥️",
      sender: "Shubham",
    },
    {
      content: "chiii",
      sender: "Simran",
    },
    {
      content: "I hate you 😏",
      sender: "Simran",
    },
    {
      content: "😂🤣",
      sender: "Shubham",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [currentUser] = useState("Shubham");

  return (
    <div>
      {/* header container on top */}
      <header className="dark:border-gray-700 fixed w-full dark:bg-gray-900 py-5 shadow flex justify-around items-center">
        {/* room id container */}
        <div>
          <h1 className="text-xl font-semibold">
            Room: <span>Family Room</span>
          </h1>
        </div>
        {/* user name container */}
        <div>
          <h1 className="text-xl font-semibold">
            User: <span>Shubham Kumar</span>
          </h1>
        </div>
        {/* button: leave room */}
        <div>
          <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-lg">
            Leave Room
          </button>
        </div>
      </header>

      <main className="py-20 w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === currentUser ? "justify-end" : "justify-start"
            } `}
          >
            <div
              className={`my-2 ${
                message.sender === currentUser ? "bg-green-800" : "bg-gray-800"
              } p-2 max-w-xs rounded`}
            >
              <div className="flex flex-row gap-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src={message.sender === currentUser ? Img2 : Img1}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">{message.sender}</p>
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* input message container */}
      <div className="fixed bottom-4 w-full h-16">
        <div className="h-full pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900 ">
          <input
            type="text"
            placeholder="Type your message here..."
            className="dark:border-gray-600 w-full dark:bg-gray-800 px-5 py-2 rounded-full h-full focus:outline-none"
          />
          <div className="flex gap-1">
            <button className="dark:bg-purple-600 w-10 flex justify-center items-center rounded-full">
              <MdAttachFile size={20} />
            </button>
            <button className="dark:bg-green-600 h-10 w-10 flex justify-center items-center rounded-full">
              <MdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
