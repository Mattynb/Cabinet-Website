import { useState } from "react";
import { Link } from "react-router-dom";
import style from '../styles/Nav/Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to an API
    console.log({ email });
  };
  return (
    <div className={style.footer} position='static'>
      <div className={style.group45}>
        <div className={style.group32}>
          <div className={style.text}>
            <div className={style.name}>
              <div>Plan Ahead Constructions</div>
              <div className={style.blue}>Kitchen & Bath</div>
            </div>

            <div className={style.address}>
              50 New Salem Street,
              Wakefield, MA 01880, USA</div>
          </div>

          <div className={style.buttonContainer}>
            <div className={style.gray}>Links</div>
            <div className={style.frame24}>
              <Link to="/"><button className={style.button} href="#">Home</button></Link>
              <Link to="/shop"><button className={style.button} >Shop</button></Link>
              <Link to="/about"><button className={style.button} href="#">About</button></Link>
              <Link to="/galery"><button className={style.button} href="#">Galery</button></Link>
            </div>
          </div>

          <div className={style.emailContainer}>
            <div className={style.gray}>Newsletter</div>
            <div className={style.contactInfo}>
              <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="customer_email">
                  <div className={style.emailInput}>
                    <input
                      style={{ display: 'block' }}
                      type="email"
                      value={email}
                      id='customer_email'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      required
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>

        <div className={style.group44}>
          <div className={style.line4}></div>
          <div className={style.group44text}>2023 Plan Ahead Constructions. All rights reverved</div>
        </div>
      </div>
    </div>
  )
}
