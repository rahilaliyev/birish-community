import React from "react";
import { Link } from "react-router-dom";
import sectionImage from "../../assets/images/howWorks.png";

const HowWorks = () => {
  return (
    <section>
      <div className="how-works container">
        <div className="section-image">
          <img src={sectionImage} alt="How works?" />
        </div>
        <div className="section-text">
          <h2>Necə işləyir?</h2>
          <h3>Sizə lazım olan bir xidməti tapın</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            mauris mattis a pretium risus senectus. Mattis dui id tristique
            ornare mauris justo, vitae. Duis nunc faucibus consequat nunc
            blandit. Vitae consectetur quam dapibus in.
          </p>
          <button>
            <Link to="#">baxın</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
