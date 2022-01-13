import React from "react";
import PageHeader from "./PageHeader";
import "./Question.scss";
import QuestionsDetails from "./QuestionsDetails";
import ReplyIcon from "@mui/icons-material/Reply";
import MainQuestion from "./MainQuestion";
import SimiliarQuestion from "./SimiliarQuestion";

const Question = () => {
  return (
    <div className="question">
      <div className="question-container container">
        <PageHeader />
        <QuestionsDetails />
        <div className="questionsAndReplyButtons">
          <button>Sual ver</button>
          <button>
            <ReplyIcon /> <span> Cavab ver</span>
          </button>
        </div>
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
