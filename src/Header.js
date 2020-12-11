import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          //   alt={user?.displayName}
          //   src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header_search">
        <Search />
        <input type="text" placeholder="Search MJ's HQ" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
