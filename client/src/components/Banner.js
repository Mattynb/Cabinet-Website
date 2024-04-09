import React from "react";
import "../../src/styles/Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-item">
          <div className="banner-img">
            <img src="/trophy.svg" alt="Trophy Icon" />
          </div>
          <div className="banner-detail">
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="banner-item">
          <div className="banner-img">
            <img src="/check.svg" alt="Check Icon" />
          </div>
          <div className="banner-detail">
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="banner-item">
          <div className="banner-img">
            <img src="/shipping.svg" alt="Shipping Icon" />
          </div>
          <div className="banner-detail">
            <h2>Free Shipping</h2>
            <p>Order over $150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
