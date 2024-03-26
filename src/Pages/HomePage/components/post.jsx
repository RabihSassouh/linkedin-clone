import React, { useEffect, useState } from "react";

import axios from "axios";

import "./post.css";

const Post = () => {
    const [postContent, setPostContent] = useState("");
    const [posts, setPosts] = useState([]);
  
    const userId = 3; // Replace 3 with the actual user ID
  
    useEffect(() => {
      // Fetch posts when component mounts
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      // Fetch posts from the server and update state
      try {
        const response = await axios.get(
          "http://localhost/linkedin-clone/src/backend/getPosts.php"
        );
        if (response.data.status === "success") {
          setPosts(response.data.posts);
        } else {
          console.error("Error fetching posts:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
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
        setPosts([...posts,response.data.post]);
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
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <p>User ID: {post.user_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
