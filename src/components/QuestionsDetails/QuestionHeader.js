import React from "react";
import "./Question.scss";
import userImage from "../../assets/images/questionPageProfilePicture.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";

const QuestionsDetails = () => {
  return (
    <div className="main-question">
      <h2>Eyni kateqoriyada iki dənə xidmət qoya bilərəm?</h2>
      <div className="userQuestionInfo">
        <div className="userImageAndDetails">
          <div className="userImage">
            <img src={userImage} alt="userImage" />
          </div>
          <div className="userDetails">
            <p>
              Sualı verən <span>Sahib</span>
            </p>
            <div className="date">
              <span>15 Dekabr 2021</span> tarixində yaradılıb
            </div>
          </div>
        </div>
        <div className="likesAndAnswers">
          <div className="likes">
            <ThumbUpIcon /> <span>160 bəyənmə</span>
          </div>
          <div className="answers">
            <ReplyIcon /> <span>15 cavab</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsDetails;
