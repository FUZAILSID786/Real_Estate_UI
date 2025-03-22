import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-hero-sec-container">
      <div className="about-hero-sec">
        <div className="about-hero-img">
          <img src="/company_pic.webp" alt="" />
        </div>
        <div className="about-hero-text">
          <h1>ABOUT US</h1>
          <h2>Welcome to Propsource – Your Trusted Real Estate Partner</h2>

          <p>
            At Propsource, we believe that finding the perfect home or property
            should be simple, transparent, and hassle-free. Whether you're
            looking to buy, rent, or list a property, we provide an easy-to-use
            platform that connects buyers, renters, and property owners
            seamlessly.
          </p>
          <h2> Who we are</h2>
          <p>
            Propsource is a modern real estate platform designed to help
            individuals and businesses find the right properties based on their
            preferences. We understand the challenges of property search and
            strive to make the process smooth and efficient.
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
