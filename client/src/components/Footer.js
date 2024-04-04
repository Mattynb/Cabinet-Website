import {
  AppBar,
  Button,
  Stack
} from '@mui/material'

import style from '../styles/Nav/Footer.module.css';
import { useState } from "react";
import styles from '../styles/home/ContactForm.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
      e.preventDefault();
      // Assuming subscribeToNewsletter makes an API call
      //subscribeToNewsletter(email)
    fetch('http://localhost:8080/api/newsletter/subscribe', { // Replace with your actual backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    // .then(response => response.json())
    // .then(data => callback(null, data))
    // .catch(error => callback(error, null));
  return (
    <div className={style.footer} position='static'>
        <div className={style.group45}>
          <div className={style.group32}>
            <div className={style.text}>
              <div class={style.name}>
                <div>Plan Ahead Constructions</div>
                <div className={style.blue}>Kitchen & Bath</div>
              </div>

              <div class={style.address}>
              50 New Salem Street,
              Wakefield, MA 01880, USA</div>
            </div>

            <div class={style.buttonContainer}>
              <div class={style.gray}>Links</div>
              <div class={style.frame24}>
                <Link to="/"><button class={style.button} href="#">Home</button></Link>
                <Link to="/shop"><button class={style.button} >Shop</button></Link>
                <Link to="/about"><button class={style.button} href="#">About</button></Link>
                <Link to="/galery"><button class={style.button} href="#">Galery</button></Link>
              </div>
            </div>
            
            <div className={style.emailContainer}>
              <div class={style.gray}>Newsletter</div>
              <div className={style.contactInfo}>
                <form onSubmit={handleNewsletterSubmit} className={style.form}>
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
}