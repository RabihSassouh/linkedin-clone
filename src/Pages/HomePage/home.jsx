import React, { useEffect, useState } from "react";
import Header from "./components/header";
import axios from "axios";

import "./home.css";
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/linkedin-clone/src/backend/viewUserInfo.php?user_id=3"
      );
      if (response.data.status === "success") {
        setUser(response.data.user);
      } else {
        console.error("Error fetching user data:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <Header />
      {user && (
        <div className="user-profile">
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <p>{user.email}</p>
            <p>{user.experience}</p>
            <p>{user.education}</p>
            <p className="stat">{user.connections} connections</p>
            <p className="stat">{user.posts} posts</p>
            <p className="stat">{user.followers} followers</p>
            <button>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
