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
      .onSnapshot((snapShot) =>
        setPosts(snapShot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {/* {posts.map((post) => {
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />;
      })} */}

      <Post
        profilePic="https://images.assetsdelivery.com/compings_v2/puhhha/puhhha1608/puhhha160800218.jpg"
        message="Check out the flight pilot game in action!"
        timestamp="Posted at this time!"
        username="Anny"
        image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dcd83624702049.56b84ae5b65c7.jpg"
      />
      {/**Message send componentl */}
    </div>
  );
}

export default Feed;
