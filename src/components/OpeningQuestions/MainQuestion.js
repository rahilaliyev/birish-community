import React from "react";
import profilePicture from "../../assets/images/questionPageProfilePicture.png";

const MainQuestion = () => {
  return (
    <section className="mainQuestionContent">
      <h3>Sual</h3>
      <div className="questionContent">
        <div className="questionImage">
          <img src={profilePicture} alt="profilePicture" />
        </div>
        <div className="questionText">
          <span>sahib</span>
          <p>
            Mənim saytda bir kateqoriyada xidmətim var. Bəs mən başqa xidmət
            qoya bilərəm eyni kateqoriyaya?
          </p>
          <span>15 Dekabr 2021</span>
        </div>
      </div>
    </section>
  );
};

export default MainQuestion;
