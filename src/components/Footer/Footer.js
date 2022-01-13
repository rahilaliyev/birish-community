import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/LogoWhite.png";
import "./Footer.scss";
import InstagramLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import YoutubeLogo from "../../assets/images/youtube.png";
import TelegramLogo from "../../assets/images/send.png";
import GooglePlay from "../../assets/images/GooglePlaystore.png";
import AppStore from "../../assets/images/Appstore.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Birish logo" />
          </Link>
        </div>
        <ul>
          Kateqoriyalar
          <li>
            <a href="https://birish.net/categories/qrafik-dizayn">
              Qrafik Dizayn
            </a>
          </li>
          <li>
            <a href="https://birish.net/categories/rqmsal-marketinq">
              Rəqəmsal Marketinq
            </a>
          </li>
          <li>
            <a href="https://birish.net/categories/yaz-amp-trcm">
              Yazı & Tərcümə
            </a>
          </li>
          <li>
            <a href="https://birish.net/categories/video-amp-animasiya">
              Video & Animasiya
            </a>
          </li>
          <li>
            <a href="https://birish.net/categories/proqramladrma">
              Proqramlaşdırma
            </a>
          </li>
          <li>
            <a href="https://birish.net/categories/biznes">Biznes </a>
          </li>
          <li>
            <a href="https://birish.net/categories/musiqi-amp-audio">
              Musiqi & Audio
            </a>
          </li>
        </ul>
        <ul>
          Haqqımızda
          <li>
            <a href="https://birish.net/terms_and_conditions">
              Şərtlər və Qaydalar
            </a>
          </li>
          <li>
            <a href="https://birish.net/customer_support">Müştəri Dəstəyi</a>
          </li>
          <li>
            <a href="https://birish.net/how-it-works">Necə İşləyir?</a>
          </li>
          <li>
            <a href="https://birish.net/blog/">Bloq</a>
          </li>
          <li>
            <Link to="#">Forum</Link>
          </li>
          <li>
            <Link to="#">Gizlilik Siyasəti </Link>
          </li>
        </ul>
        <div>
          <h4>Bizi izləyin</h4>
          <div className="social-medias">
            <a href="https://www.instagram.com/birishofficial/">
              <img src={InstagramLogo} alt="Instagram logo" />
            </a>
            <Link to="#">
              <img src={YoutubeLogo} alt="Youtube logo" />
            </Link>
            <a href="https://www.facebook.com/birish.net">
              <img src={FacebookLogo} alt="Facebook logo" />
            </a>
            <a href="https://t.me/birishnet">
              <img src={TelegramLogo} alt="Telegram logo" />
            </a>
          </div>
          <p>Tezlikle</p>
          <div className="apps">
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppStore} alt="App store" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
