import React, { useState } from "react";

import axios from "axios";

import "./post.css";

const Post = () => {
  const [postContent, setPostContent] = useState("");
    const userId= 3;
  const handlePost = async () => {
    try {
        const formData= new FormData();
        formData.append("user_id",userId);
        formData.append("content",postContent);
      const response = await axios.post(
        "http://localhost/linkedin-clone/src/backend/addPosts.php",formData
      );
      if (response.data.status === "success") {
        console.log("Post added successfully");
        setPostContent("");
      } else {
        console.error("Error adding post:", response.data.message);
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div>
      
      <div className="post-container">
        <div className="post-input">
          <textarea
            placeholder="What do you want to share?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <button onClick={handlePost}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
