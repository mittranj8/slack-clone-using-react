import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import "./Chat.css";
import Message from "./Message";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
