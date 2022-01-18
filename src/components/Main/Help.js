import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import ChatIconImage from "../../assets/images/ChatIconImage.png";
import CustomerIconImage from "../../assets/images/CustomerIconImage.png";
import RulesIconImage from "../../assets/images/RulesIconImage.png";

const Help = () => {
  return (
    <section className="help">
      <div className="help-container container">
        <div className="main-page-cards">
          <div className="cards">
            <a href="https://birish.net/customer_support">
              <img src={ChatIconImage} alt="CardImage" />
              <h3>Müştəri Dəstəyi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </a>
          </div>
          <div className="cards">
            <a href="https://birish.net/terms_and_conditions">
              <img src={CustomerIconImage} alt="CardImage" />
              <h3>Şərtlər və Qaydalar</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </a>
          </div>
          <div className="cards">
            <a href="https://birish.net/how-it-works">
              <img src={RulesIconImage} alt="CardImage" />
              <h3>Necə Çalışır?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat congue amet sit.
              </p>
            </a>
          </div>
        </div>
        <h2>Sizə kömək edə bilər</h2>
        <div className="helpCards">
          <div className="card">
            <div className="card-text">
              <h3>Frilans Çalışma Modeli İşəgötürənlər Üçün Qazaclıdır?</h3>
              <p>
                Frilans çalışma anlayışı özəlliklə Covid'dən sonra tez-tez
                qarşımıza çıxmağa başladı. Bunu həyatımızın bir parçası olaraq
                görməyə və öyrəşməyə başlamış olsaq da əslində frilans çalışma
                modeli
              </p>
            </div>

            <Link to="#">ətraflı oxu</Link>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>
                Təcrübəniz olmasa belə Frilanser olaraq edə biləcəyiniz işlər
                hansılardır?
              </h3>
              <p>
                İstər əlavə gəlir əldə etmək üçün frilanser olaraq çalışın
                istərsə də sərbəst çalışma formatını işinz olaraq icra edin,
                frilanser olaraq çalışma şəraitinin verdiyi rahatlıq və işinizin
                müdiri olmaq hər yeni layihədə sizi sərbəst çalışmağa{" "}
              </p>
            </div>

            <Link to="#">ətraflı oxu</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
