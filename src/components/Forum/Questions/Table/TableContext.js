import React from "react";
import profilePhoto from "../../../../assets/images/Thumbnail.png";

const TableContext = () => {
  const tableData = [
    {
      id: 1,
      name: "Sahib",
      questions: "More time bought for recording than the gig allows?",
      image: profilePhoto,
      date: "12 Dekabr 2021",
      views: "156",
      answers: "20",
    },
    {
      id: 2,
      name: "Sahib",
      questions: "More time bought for recording than the gig allows?",
      image: profilePhoto,
      date: "12 Dekabr 2021",
      views: "156",
      answers: "20",
    },
    {
      id: 3,
      name: "Sahib",
      questions: "More time bought for recording than the gig allows?",
      image: profilePhoto,
      date: "12 Dekabr 2021",
      views: "156",
      answers: "20",
    },
    {
      id: 4,
      name: "Sahib",
      questions: "More time bought for recording than the gig allows?",
      image: profilePhoto,
      date: "12 Dekabr 2021",
      views: "156",
      answers: "20",
    },
    {
      id: 5,
      name: "Sahib",
      questions: "More time bought for recording than the gig allows?",
      image: profilePhoto,
      date: "12 Dekabr 2021",
      views: "156",
      answers: "20",
    },
  ];

  return (
    <div className="table-context">
      {tableData.map((question) => (
        <div className="questions-card" key={question.id}>
          <div className="card-info">
            <div className="card-thumbnail">
              <img src={question.image} alt="ProfilePicture" />
            </div>
            <div className="card-texts">
              <h3>{question.questions}</h3>
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
