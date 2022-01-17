import React from "react";
import { tableData } from "../../../../data";
import { Link, useParams } from "react-router-dom";

const TableContext = () => {
  const { questionId } = useParams();
  return (
    <div className="table-context">
      <h1>{questionId}</h1>
      {tableData.map((question) => (
        <div className="questions-card" key={question.id}>
          <div className="card-info">
            <div className="card-thumbnail">
              <img src={question.image} alt="ProfilePicture" />
            </div>
            <div className="card-texts">
              <Link to={"/questionId"}>
                <h3>{question.questions}</h3>
              </Link>
              <div className="who-and-date">
                <div className="who">
                  <span> {question.name}</span> tərəfindən yaradılıb.
                </div>
                <div className="date">{question.date}</div>
              </div>
            </div>
          </div>
          <div className="views-and-answers">
            <div className="views">
              <span> {question.views}</span> baxış
            </div>
            <div className="answers">
              <span>{question.answers}</span> cavab
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableContext;
