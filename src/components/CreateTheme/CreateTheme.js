import React, { useState } from "react";
import PageHeader from "../QuestionsDetails/PageHeader";
import "./CreateTheme.scss";
import "../QuestionsDetails/Question.scss";
import AddIcon from "@mui/icons-material/Add";

const CreateTheme = () => {
  const [textarea, setTextarea] = useState("");
  return (
    <section className="creatingTheme">
      <div className="creatingTheme-container container">
        <PageHeader />
        <form>
          <div className="section-header">
            <h2>Yeni Mövzu Yarat</h2>
            <div className="input-element">
              <label htmlFor="header">Başlıq</label>
              <input type="text" />
            </div>
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
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
          <div className="submit">
            <button type="submit">Göndər</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTheme;
