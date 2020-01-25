import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p> 2018 - Appo,All Right Reserved</p>
      <div className="social-links">
        <a href="">
          <img
            src={`${process.env.PUBLIC_URL}/img/Footer-Facebook.png`}
            alt="facebook"
          />
        </a>
        <a href="">
          <img
            src={`${process.env.PUBLIC_URL}/img/Footer-Twitter.png`}
            alt="twitter"
          />
        </a>
        <a href="">
          <img
            src={`${process.env.PUBLIC_URL}/img/Footer-Dribble.png`}
            alt="dribble"
          />
        </a>
        <a href="">
          <img
            src={`${process.env.PUBLIC_URL}/img/Footer-Google.png`}
            alt="google"
          />
        </a>
        <a href="">
          <img
            src={`${process.env.PUBLIC_URL}/img/Footer-Youtube.png`}
            alt="youtube"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
