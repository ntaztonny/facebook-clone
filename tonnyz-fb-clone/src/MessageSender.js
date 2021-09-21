import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar, IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhototLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Do some DB info submit
    setInput("");
    setImageURL("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`what's on your mind?, ${user.displayName}`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messangeSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messangeSender__option">
          <PhototLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messangeSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/ Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
