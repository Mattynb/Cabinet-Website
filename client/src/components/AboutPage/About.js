import { Link } from 'react-router-dom';
import Three from "./ThreeD";
import style from "../../styles/AboutPage/About.module.css";

function About() {
    return (
      <div className={style.about}>
        <div className="shop-hero">
          <img src="/shop-hero.jpg" alt="Shop Hero" />
          <div className="shop-hero-title">About</div>
          <div className="shop-hero-subtitle">
            <Link to="/" className="show-more-link">
              <span className="shop-hero-home">Home &gt;</span>{" "}
            </Link>
            <span className="shop-hero-shop"> About</span>
          </div>
        </div>
        <div className={style.group178}>
          <img src="/Group 178.png" alt="At PAC" />
        </div>
        <div className={style.group177}>
          <div className={style.upper}>
            <p className={style.collection}>
              <p className={style.strong}>Capital Collection</p>
              Framed Cabinet with Full Overlay Doors and Drawers<br/>
               • Under Mount Full Extension Soft Close Drawer Glides<br/>
               • Concealed European Style Hinges with Soft Close Feature<br/>
               • Five Piece HDF Door<br/>
               • ½” Plywood Box with UV Coated Matching Exterior<br/>
               • Glue & Staple or Metal Clip Assembly<br/>
               • UV Coated Natural Interior</p>
              <Three />
          </div>
          <img src="/image 11.png" alt="Shaker" />
        </div>
        <div className={style.group179}>
          <div className={style.text}>Take a Closer Look</div>
          <img src="/Framed 1.png" alt="Closer Look" />
        </div>
      </div>
    )
  }
  export default About;