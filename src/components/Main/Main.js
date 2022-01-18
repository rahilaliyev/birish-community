import React from "react";
import "./Main.scss";

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
       
        </div>
      </div>
      <Help />
      <HowWorks />
      <Solution />
    </main>
  );
};

export default Main;
