import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Solution = () => {
  return (
    <section className="solution">
      <div className="solution-wrapper">
        <div className="solution-container container">
          <h4>
            İŞLƏRİNİZ ÜÇÜN <span> FRİLANS </span>HƏLLƏR
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            elementum vestibulum tempor at. Volutpat integer.
          </p>
          <button>
            <Link to="#">Qazanmağa başla</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
