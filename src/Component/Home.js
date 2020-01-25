import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section id="home">
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero__text">
          <h1>Choose a better way to represent your app</h1>
          <p>Vestibulum ac diam sit amet quam vehicula elementum.</p>
        </div>
        <div className="hero__call-to-action">
          <button>Download Free</button>
          <button>Contact Us</button>
        </div>
        <div className="hero__phone">
          <img
            src={`${process.env.PUBLIC_URL}/img/Hero-Smartphone.png`}
            alt="smartphone"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
