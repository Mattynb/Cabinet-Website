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
          <Link to="../shop">
          <img className="imageL" src="collections-image/ImageL.png" alt="" />
            <div className="title-bar">Framed</div>
          </Link>
          <Link to="../shop">
            <img className="imageM" src="collections-image/FramelessCollec.png" alt="" />
            <div className="title-bar">Frameless</div>
          </Link>
          <Link to="../shop">
            <img className="imageR" src="collections-image/kitchenC2.png" alt="" />
            <div className="title-bar">Universal Design</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;