import { useState } from "react";
import { Link } from "react-router-dom";
import style from '../styles/Nav/Footer.module.css';
import subscribeToNewsletter from "../utils/subscribeToNewsletter";

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to an API
    subscribeToNewsletter(email, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        alert('You have successfully subscribed to our newsletter!');
      }
    }
    );
  };

  // refresh the about page onload to show 3D model
  function refreshPage(){ 
    window.location.href = '/about';
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
                50 New Salem Street,<br/>
                Wakefield, MA 01880, USA
              </div>
            </div>
            <div className={style.buttonContainer}>
              <div className={style.gray}>Links</div>
              <div className={style.frame24}>
                <Link to="/"><button class={style.button}>Home</button></Link>
                <Link to="/shop"><button class={style.button}>Shop</button></Link>
                <Link to="/about" onClick={ refreshPage }><button class={style.button}>About</button></Link>
                <Link to="/galery"><button class={style.button}>Gallery</button></Link>
              </div>
            </div>
            <div className={style.emailContainer}>
              <div className={style.gray}>Newsletter</div>
              <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="customer_email">
                  <div className={style.emailInput}> 
                    <input
                      style={{ display: 'block'}}
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
          <div className={style.group44}>
            <div className={style.line4}></div>
            <div className={style.group44text}>{new Date().getFullYear()} Plan Ahead Constructions. All rights reverved</div>
          </div>
        </div>
    </div>
  )
}