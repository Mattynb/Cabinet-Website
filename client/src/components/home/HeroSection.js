import React from "react";
import "../../styles/home/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-img">
          <img src="/hero-img1.png" alt="Hero" />
        </div>
        <div className="hero-container">
          <p className="new-arrival">New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button>BUY NOW</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
