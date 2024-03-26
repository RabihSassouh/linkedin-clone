import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="Container">
      <div className="Content">
        <div className="Logo flex">
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </div>
        <div className="Search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-home">
          <div className="NavListWrap">
            <div className="NavList active">
              <a className="flex">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </div>
            <div className="flex">
              <a className="flex">
                <img src="/images/nav-network.svg" alt="" />

                <span>My Network</span>
              </a>
            </div>
            <div className="flex">
              <a className="flex">
                <img src="/images/nav-jobs.svg" alt="" />

                <span>Jobs</span>
              </a>
            </div>
            <div className="flex">
              <a className="flex">
                <img src="/images/nav-messaging.svg" alt="" />

                <span>Messaging</span>
              </a>
            </div>
            <div className="flex">
              <a className="flex">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </div>

            <div>
              <a className="SignOut">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
