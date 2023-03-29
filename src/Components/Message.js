import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // console.log(props.message.text);
  // console.log("hahahah");

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.message]);

  return (
    <div
      ref={ref}
      className={`message ${
        props.message.sendderID === currentUser.uid && "owner"
      }`}>
      <div className="messageInfo">
        <img
          src={
            props.message.sendderID === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""></img>
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{props.message.text}</p>
        {props.message.img && <img src={props.message.img} alt=""></img>}
      </div>
    </div>
  );
};

export default Message;
