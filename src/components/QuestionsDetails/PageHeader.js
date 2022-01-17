import React from "react";
import SearchInput from "../Forum/Questions/SearchInput";
import "./Question.scss";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profileThumbnail from "../../assets/images/profileThumbnail.png";

const PageHeader = () => {
  return (
    <div className="pageheader">
      <SearchInput />
      <div className="userDetails">
        <div className="profileDetails">
          <AddIcon /> <span> yarat</span>
        </div>
        <div className="profileDetails">
          <NotificationsNoneIcon /> <MailOutlineIcon />
        </div>
        <div className="profileDetails">
          <KeyboardArrowDownIcon />
          <span>imranovic</span>
          <img src={profileThumbnail} alt="profilePicture" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
