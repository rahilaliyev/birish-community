import React, { useState } from "react";
import PageHeader from "./PageHeader";
import "./Question.scss";
import QuestionHeader from "./QuestionHeader";
import ReplyIcon from "@mui/icons-material/Reply";
import MainQuestion from "./MainQuestion";
import SimiliarQuestion from "./SimiliarQuestion";

const Question = () => {
  const [opentextarea, opensettextarea] = useState(false);
  const [textarea, setTextarea] = useState("");

  const openingTextarea = () => {
    opensettextarea(true);
  };
  return (
    <div className="question">
      <div className="question-container container">
        <PageHeader />
        <QuestionHeader />
        <div className="questionsAndReplyButtons">
          <button>Sual ver</button>
          <button onClick={() => openingTextarea(true)}>
            <ReplyIcon /> <span> Cavab ver</span>
          </button>
        </div>
        {opentextarea ? (
          <form className="textarea">
            <textarea
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <button type="submit">Göndər</button>
          </form>
        ) : null}
        <MainQuestion />
        <div className="questionsAndReplyButtons">
          <button>Ən çox bəyənilən</button>
          <button>Son yazılan</button>
        </div>
        <SimiliarQuestion />
      </div>
    </div>
  );
};

export default Question;
