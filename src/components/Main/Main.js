import React from "react";
import "./Main.scss";
import ChatIconImage from "../../assets/images/ChatIconImage.png";
import CustomerIconImage from "../../assets/images/CustomerIconImage.png";
import RulesIconImage from "../../assets/images/RulesIconImage.png";
import { Link } from "react-router-dom";
import Help from "./Help";
import HowWorks from "./HowWorks";
import Solution from "./Solution";

const Main = () => {
  return (
    <main>
      <div className="main-page-container ">
        <div className="main-text container">
          <div className="main-page-text">
            <h1>Xoş Gəlmisiniz</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              justo, cras lobortis ornare arcu nunc porttitor amet. Et
              consectetur egestas est, cursus platea nibh aenean. Egestas
              hendrerit.
            </p>
            <div className="buttons">
              <button>
                <Link to="#">Qeydiyyat</Link>
              </button>
              <button>
                <Link to="#">Daxil olun</Link>
              </button>
            </div>
          </div>
          <div className="main-page-cards">
            <div className="cards">
              <img src={ChatIconImage} alt="CardImage" />
              <h3>Müştəri Dəstəyi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </div>
            <div className="cards">
              <img src={CustomerIconImage} alt="CardImage" />
              <h3>Şərtlər və Qaydalar</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </div>
            <div className="cards">
              <img src={RulesIconImage} alt="CardImage" />
              <h3>Necə Çalışır?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Help />
      <HowWorks />
      <Solution />
    </main>
  );
};

export default Main;
