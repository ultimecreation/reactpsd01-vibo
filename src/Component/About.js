import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="about-first">
        <div className="about-first__phone">
          <img
            src={`${process.env.PUBLIC_URL}/img/Marketing1-Smartphone.png`}
            alt=""
          />
        </div>
        <div className="about-first__adds">
          <div className="about-first__adds__single">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing1-icon1.png`}
              alt=""
            />
            <h5>First 7 Days Free</h5>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
          <div className="about-first__adds__single">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing1-icon2.png`}
              alt=""
            />
            <h5>Fully Support</h5>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
          <div className="about-first__adds__single">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing1-icon3.png`}
              alt=""
            />
            <h5>Modern Flat Design</h5>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
          <div className="about-first__adds__single">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing1-icon4.png`}
              alt=""
            />
            <h5>User Friendly</h5>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
        </div>
      </div>
      <div className="about-second">
        <div className="about-second__left">
          <h2>Stable And Ready</h2>
          <p>
            as ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
            tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed
            sit amet dui. Curabitur aliquet quam id dui posuere blandit.
            Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam
            sit amet quam.
          </p>
          <button>Download Free</button>
        </div>
        <div className="about-second__right">
          <div className="about-second__right__single-card">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing2-Icon1.png`}
              alt="marketing icon 1"
            />
            <div>
              <h5>Made With Love</h5>
              <p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diam.
              </p>
            </div>
          </div>
          <div className="about-second__right__single-card">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing2-Icon2.png`}
              alt="marketing icon 2"
            />
            <div>
              <h5>Free of Use</h5>
              <p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diam.
              </p>
            </div>
          </div>
          <div className="about-second__right__single-card">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing2-Icon3.png`}
              alt="marketing icon 3"
            />
            <div>
              <h5>Fully Support Available</h5>
              <p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diam.
              </p>
            </div>
          </div>
          <div className="about-second__right__single-card">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing2-Icon4.png`}
              alt="marketing icon 4"
            />
            <div>
              <h5>Flat and Modern UI & UX</h5>
              <p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-third">
        <div className="about-third__left">
          <img
            src={`${process.env.PUBLIC_URL}/img/Marketing3-Vector-Code-Illustration.png`}
            alt="marketing illustration"
          />
        </div>
        <div className="about-third__right">
          <h5>Everything You Need</h5>
          <div className="android">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing3-checked.png`}
              alt="marketing checked"
            />
            <h6>Android</h6>
          </div>
          <div className="ios">
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing3-checked.png`}
              alt="marketing checked"
            />
            <h6>IPhone</h6>
          </div>
          <p>
            Cras ultricies ligula sed magna dictum porta. Nulla porttitor
            accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Curabitur aliquet quam id dui posuere
            blandit. Curabitur aliquet quam id dui posuere blandit. Vestibulum
            ac diam sit amet quam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
