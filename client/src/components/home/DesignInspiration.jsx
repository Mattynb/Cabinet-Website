
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './DesignInspiration.css'; // Your custom styles
import { Link } from 'react-router-dom';

const DesignInspiration = () => {
  const navigate = useNavigate(); // useNavigate hook to get navigate function

  return (
    <div className="design-inspiration">
      <div className="text-section">
        <h2 className="section-title">50+ Beautiful Design Inspiration</h2>
        <p className="section-description">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
      </div>
      <div className="image-gallery">
        <Link to="/page-for-imageL">
          <img src="/ImageL.jpg" className="imageL" alt="Inspiration Left" />
        </Link>
        <Link to="/page-for-TGW-OSCC">
          <img src="/TGW-OSCC.jpg" className="TGW-OSCC" alt="Inspiration Middle" />
        </Link>
        <Link to="/page-for-imageR">
          <img src="/ImageR.png" className="imageR" alt="Inspiration Right" />
        </Link>
      </div>
      <button className="explore-button" onClick={() => navigate('/gallery')}>Gallery</button>
    </div>
  );
};

export default DesignInspiration;



