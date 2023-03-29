import React, { useContext } from "react";
import Cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt=""></img>
          <img src={add} alt=""></img>
          <img src={more} alt=""></img>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
