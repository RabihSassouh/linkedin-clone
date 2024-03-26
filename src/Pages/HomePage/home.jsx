import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Post from "./components/post";
import axios from "axios";

import "./home.css";
const Home = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    bio: "",
    experience: "",
    education: "",
  });

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
        setEditedUser(response.data.user);
      } else {
        console.error("Error fetching user data:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost/linkedin-clone/src/backend/editUserInfo.php",
        {
          user_id: user.id,
          bio: editedUser.bio,
          experience: editedUser.experience,
          education: editedUser.education,
        }
      );
      if (response.data.status === "success") {
        setIsEditing(false);
        setUser(response.data.user);
      } else {
        alert("error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <Post />
      {user && (
        <div className="user-profile">
          <div className="profile-info">
            <h2>{user.name}</h2>
            {isEditing ? (
              <>
                <textarea
                  name="bio"
                  value={editedUser.bio}
                  onChange={handleChange}
                ></textarea>

                <textarea
                  name="experience"
                  value={editedUser.experience}
                  onChange={handleChange}
                ></textarea>

                <textarea
                  name="education"
                  value={editedUser.education}
                  onChange={handleChange}
                ></textarea>
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <p>{user.bio}</p>
                <p>{user.email}</p>
                <p>{user.experience}</p>
                <p>{user.education}</p>
                <p className="static">{user.connections} connections</p>
                <p className="static">{user.posts} posts</p>
                <p className="static">{user.followers} followers</p>
                <button onClick={handleEdit}>Edit</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
