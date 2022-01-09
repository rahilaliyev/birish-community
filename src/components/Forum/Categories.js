import React from "react";
import handIcon from "../../assets/images/handIcon.png";
import computerIcon from "../../assets/images/computerIcon.png";
import dartIcon from "../../assets/images/dartIcon.png";
import locationIcon from "../../assets/images/locationIcon.png";
import ideaIcon from "../../assets/images/ideaIcon.png";
import communicationIcon from "../../assets/images/communicationIcon.png";
import mobileIcon from "../../assets/images/mobileIcon.png";
import chatIcon from "../../assets/images/chatIcon.png";
import worldIcon from "../../assets/images/worldIcon.png";
import "./Forum.scss";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/images/profilePhoto.png";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";

const Categories = () => {
  const iconLists = [
    handIcon,
    communicationIcon,
    computerIcon,
    dartIcon,
    locationIcon,
    ideaIcon,
    mobileIcon,
    chatIcon,
    worldIcon,
  ];
  return (
    <section className="categories">
      <div className="categories-container container">
        <h4>Kateqoriyanı seçin</h4>
        <div className="categories-cards">
          {iconLists.map((icon, key) => (
            <Link to="#" className="card" key={key}>
              <img src={icon} key={key} alt="icon" />
              <h3>Lorem İpsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum.
              </p>
            </Link>
          ))}
        </div>
        <h4>Kateqoriyanı seçin</h4>
        <div className="questions-cards">
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={profilePhoto} alt="ProfilePhoto" />
            <div className="questions-texts">
              <h5>Egestas aliquet sed.Lorem ipsumm</h5>
              <p>Sahib Hasanov tərəfindən</p>
              <div className="date-comments">
                <div className="date">
                  <EditIcon />
                  <span>10 İyul</span>
                </div>
                <div className="comment">
                  <ReplyIcon />
                  <span>145 şərh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
