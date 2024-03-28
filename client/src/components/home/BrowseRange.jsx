import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home/BrowseRange.css";

const BrowseRange = () => {
  return (
    <section className="browse-range">
      <div className="browse-title">
        <h1>  Browse The Range </h1> 
      </div>
      <div className="image-container">
        <Link to="/image/1">
          <img src="collections-image/SW Kitchen_Small 1.png" alt="Image 1" />
          <div className="title-bar">Framed</div>
        </Link>
      </div>
      <div className="image-container">
        <Link to="/image/3">
          <img src="collections-image/SW Kitchen_Small 1.png" alt="Image 3" />
          <div className="title-bar">Frameless</div>
        </Link>
      </div>
      <div className="image-container">
        <Link to="/image/3">
          <img src="collections-image/SW Kitchen_Small 1.png" alt="Image 3" />
          <div className="title-bar">Universal Design</div>
        </Link>
      </div>
    </section>
  );
};

export default BrowseRange;
