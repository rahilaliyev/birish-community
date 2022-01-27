import React, { useState } from "react";
import PageHeader from "./PageHeader";
import "./Question.scss";
import QuestionHeader from "./QuestionHeader";
import ReplyIcon from "@mui/icons-material/Reply";
import MainQuestion from "./MainQuestion";
import SimiliarQuestion from "./SimiliarQuestion";
import TextEditor from "./TextEditor";

const Question = () => {
  const [opentextarea, setOpentextarea] = useState(false);

  const openingTextarea = () => {
    setOpentextarea(true);
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
          <form className="text-editor-submit">
            <TextEditor />
            <button type="submit" className="submit">
              Göndər
            </button>
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
