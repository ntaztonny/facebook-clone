import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel className="feed__storyreel" />
      <MessageSender />
      <Post
        profilePic="https://lh3.googleusercontent.com/a/AATXAJw5a8HyT7N41baNzn0mD9xCHKwXBwWlGOIwDPa9=s96-c"
        message="Thanks for checking out this facebook-clone! To see realtime feedback, create a post in the *What is on your mind* textbox above, you could also add an image in the image URL box. This clone is powered by react and firebase-cloud firestore database!... Have fun checking it out... Tonny"
        timestamp={new Date()}
        username="Tonny Ntambaazi"
        image=""
      />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp.toDate()}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/**Message send componentl */}
    </div>
  );
}

export default Feed;
