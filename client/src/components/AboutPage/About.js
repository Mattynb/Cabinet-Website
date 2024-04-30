import { Link } from 'react-router-dom';
import Three from "./ThreeD";
import style from "../../styles/AboutPage/About.module.css";
import "../../styles/ShopPage/Shop.css";

function About() {
    return (
      <div className={style.about}>
        <section className="shop">
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
        </section>
        <div className={style.group178}>
          {/*<img src="/Group 178.png" alt="At PAC" />*/}
          <p className={style.group178text}>At PAC, we specialize not only in crafting custom cabinetry 
          solutions but also in offering a range of ready-to-install cabinets from top manufacturers.<br/>
          <br/>
           We understand that every home and business owner has unique needs, preferences, and timelines. 
           This is why we've partnered with the finest cabinet makers in the industry, ensuring that you 
           have access to a variety of styles, finishes, and materials.<br/>
           <br/>
           From contemporary sleek lines to classic wood finishes, our extensive collection 
           guarantees that you will find the perfect fit for your kitchen, bathroom, office, or any space 
           in need of a touch of sophistication and organization.<br/>
           <br/>
           Ready to find the perfect cabinets for your space? Scroll down to explore our extensive collection of high-quality cabinets.</p>
        </div>
        <div className={style.group177}>
          <div className={style.upper}>
            <p className={style.collection}>
              <p className={style.strongC}>Capital Collection</p>
              Framed Cabinet with Full Overlay Doors and Drawers<br/>
               • Under Mount Full Extension Soft Close Drawer Glides<br/>
               • Concealed European Style Hinges with Soft Close Feature<br/>
               • Five Piece HDF Door<br/>
               • ½” Plywood Box with UV Coated Matching Exterior<br/>
               • Glue & Staple or Metal Clip Assembly<br/>
               • UV Coated Natural Interior
            </p>
            <Three />
          </div>
          <img src="/image 11.png" alt="Shaker" />
        </div>
        <div className={style.group179}>
          <div className={style.text}>Take a Closer Look</div>
          <img src="/Framed 1.png" alt="Closer Look" />
        </div>
        <div className={style.rectangle78} />
      </div>
    )
  }
  export default About;