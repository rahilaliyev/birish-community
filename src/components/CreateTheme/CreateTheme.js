import React from "react";
import PageHeader from "../OpeningQuestions/PageHeader";
import "./CreateTheme.scss";
import "../OpeningQuestions/Question.scss";
import AddIcon from "@mui/icons-material/Add";

const CreateTheme = () => {
  return (
    <section className="creatingTheme">
      <div className="creatingTheme-container container">
        <PageHeader />
        <form>
          <div className="section-header">
            <h2>Yeni Mövzu Yarat</h2>
            <label htmlFor="header">Başlıq</label>
            <input type="text" />
          </div>
          <div className="buttonForEtiquette">
            <button>
              <AddIcon /> <span>Etiket əlavə et</span>
            </button>
          </div>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default CreateTheme;
