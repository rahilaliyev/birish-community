import React from "react";
import profilePicture from "../../assets/images/questionPageProfileImage.png";
import ReplyIcon from "@mui/icons-material/Reply";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const SimiliarQuestion = () => {
  return (
    <section className="mainQuestionContent">
      <h3 className="similiarQuestion">Nurlan</h3>
      <div className="questionContent">
        <div className="questionImage">
          <img src={profilePicture} alt="profilePicture" />
        </div>
        <div className="questionSimiliarText">
          <p>
            Mənim saytda bir kateqoriyada xidmətim var. Bəs mən başqa xidmət
            qoya bilərəm eyni kateqoriyaya?
          </p>
          <span>15 Dekabr 2021</span>
          <div className="replyAndLikeButtons">
            <button>
              <ReplyIcon />
              <span> cavab ver</span>
            </button>
            <button>
              <ThumbUpOffAltIcon />
              <span>bəyən</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimiliarQuestion;
