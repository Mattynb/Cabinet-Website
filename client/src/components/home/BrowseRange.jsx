import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home/BrowseRange.css";

const BrowseRange = () => {
  return (
    <section className="browse-range">
      <div className="browse-title">
        <h1>Browse The Range</h1> 
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <Link to="/image/1">
          <img className="imageL" src="collections-image/ImageL.png" alt="Image 1" />
            <div className="title-bar">Framed</div>
          </Link>
          <Link to="/image/2">
            <img className="imageM" src="collections-image/FramelessCollec.png" alt="Image 2" />
            <div className="title-bar">Frameless</div>
          </Link>
          <Link to="/image/3">
            <img className="imageR" src="collections-image/kitchenC2.png" alt="Image 3" />
            <div className="title-bar">Universal Design</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
