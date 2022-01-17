import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import "./Questions.scss";
import Table from "./Table/Table";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import "./Questions.scss";
import SearchInput from "./SearchInput";

Modal.setAppElement("#root");
const Questions = () => {
  const [isCategoryModalOpen, setisCategoryModalOpen] = useState(false);
  const { categoryId } = useParams();

  return (
    <section className="questions">
      <div className="questions-container container">
        <div className="section-header">
          <h2>Birish Sual-Cavab</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            placerat cum amet est nibh.
          </p>
        </div>
        <div className="createTheme">
          <button
            className="create"
            onClick={() => setisCategoryModalOpen(true)}
          >
            <Link to={"#"}>
              <AddIcon />
              Mövzu yarat
            </Link>
          </button>
        </div>
        <div className="searchAndInfo">
          <SearchInput />
          <ul>
            <li>
              <a href="https://birish.net/terms_and_conditions">
                Şərtlər və Qaydalar
              </a>
            </li>
            <li>
              <a href="https://birish.net/customer_support"> Müştəri dəstəyi</a>
            </li>
            <li>
              <a href="https://birish.net/how-it-works"> Necə Çalışır</a>
            </li>
          </ul>
        </div>
        <Table />
      </div>

      <Modal
        isOpen={isCategoryModalOpen}
        onRequestClose={() => setisCategoryModalOpen(false)}
        style={{
          overlay: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          },
          content: {
            position: "static",
            width: "600px",
            left: "35%",
            top: "30%",
            height: "320px",
            border: "1px solid #D8D8D8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            padding: "0",
          },
        }}
      >
        <div className="modal">
          <div className="modal-header">
            <p>Forum mövzusunu seçin</p>
            <button onClick={() => setisCategoryModalOpen(false)}>
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <form>
            <select defaultValue={"DEFAULT"}>
              <option className="main-select" value="DEFAULT" selected>
                Kateqoriya seçin
              </option>
              <option className="main-select" value="Numune1">
                Numune 1
              </option>
              <option className="main-select" value="Numune2">
                Numune 2
              </option>
              <option className="main-select" value="Numune3">
                Numune 3
              </option>
            </select>

            <button type="submit">
              <Link to="/createTheme">Davam et</Link>
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Questions;
