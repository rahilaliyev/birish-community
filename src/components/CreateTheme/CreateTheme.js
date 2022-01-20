import React from "react";
import PageHeader from "../QuestionsDetails/PageHeader";
import "./CreateTheme.scss";
import "../QuestionsDetails/Question.scss";
import AddIcon from "@mui/icons-material/Add";
import TextEditor from "../QuestionsDetails/TextEditor";

const CreateTheme = () => {
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
          {/* <div className="text-editor-submit">
            <TextEditor />
          </div> */}
          <div className="submit">
            <button type="submit">Göndər</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTheme;
