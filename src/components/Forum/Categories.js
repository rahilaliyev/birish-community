import React from "react";
import { categoriesData } from "../../data";
import "./Forum.scss";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/images/profilePhoto.png";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-container container">
        <h4>Kateqoriyanı seçin</h4>
        <div className="categories-cards">
          {categoriesData.map((category) => (
            <Link
              to={`/forum/${category.id}`}
              className="card"
              key={category.id}
            >
              <img src={category.icon} key={category.id} alt="icon" />
              <h3>{category.header}</h3>
              <p>{category.paragraph}</p>
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
