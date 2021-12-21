import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <p>
        Thanks for checking out this facebook-clone! To see realtime feedback,
        create a post in the *What is on your mind* textbox above, you could
        also add an image in the image URL box. This clone is powered by react
        and firebase-cloud firestore database!... Have fun checking it out...
        Tonny
      </p>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcranecodestudios%2F&tabs=timeline&width=340&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
