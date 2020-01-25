import React from "react";

const Application = () => {
  return (
    <section id="app">
      <div className="app-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/Marketing4-Phone.png`}
          alt="phone"
        />
        <div className="app-container__card">
          <h5>Now Available</h5>
          <p>
            Cras ultricies ligula sed magna dictum porta. Nulla porttitor
            accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. quam vehicula elementum sed sit
            ametsuada.
          </p>
          <div className="app-container__card__icons">
            <img
              src={`${process.env.PUBLIC_URL}/img/Martketing4-iOS.png`}
              alt="ios"
            />
            <img
              src={`${process.env.PUBLIC_URL}/img/Marketing4-Google.png`}
              alt="google"
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button>GET THE APP TODAY</button>
      </div>
    </section>
  );
};

export default Application;
