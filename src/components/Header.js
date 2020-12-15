import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Header.css";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </div>
      <div className="header_search">
        <Search />
        <input type="text" placeholder="Search Mittranj's Slack Space" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
