import React from "react";

const Info = () => {
  return (
    <section id="info">
      <div className="info-links">
        <div className="info-links__single">
          <h5>Company</h5>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="info-links__single">
          <h5>Development</h5>
          <ul>
            <li>IOS</li>
            <li>Android</li>
          </ul>
        </div>
        <div className="info-links__single">
          <h5>Community</h5>
          <ul>
            <li>Social</li>
            <li>Forum</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="info-links__single">
          <h5>Info</h5>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="info-newsletter">
        <h2>Get In Touch</h2>
        <p>
          Subscribe to our newsletter and get notification for upcoming cool
          sutff.
        </p>
        <form>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" />
          <input type="submit" value="COUNT ME IN" />
        </form>
      </div>
    </section>
  );
};

export default Info;
