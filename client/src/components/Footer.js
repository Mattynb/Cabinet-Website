import {
  AppBar,
  Button,
  Stack
} from '@mui/material'

import style from '../styles/Nav/Footer.module.css';
import { useState } from "react";
import styles from '../styles/home/ContactForm.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., sending the data to an API
        console.log({email});
    };
  return (
    <div className={style.footer} position='static'>
      
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <div class={style.bold}>Plan Ahead Constructions</div>
            <div class={style.icon}>Kitchen & Bath</div>
            <div class={style.gray}>50 New Salem Street,<br></br>
            Wakefield, MA 01880, USA</div>
          </div>
          <div>
            <div class={style.gray}>Links</div>
            <Stack direction="row" spacing={2}>
              <button class={style.button} href="#">Home</button>
              <button class={style.button} href="/shop">Shop</button>
              <button class={style.button} href="#">About</button>
              <button class={style.button} href="#">Galery</button>
            </Stack>
          </div>
          <div>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="customer_email">
                  <div class={style.gray}>Newsletter</div>
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
                </label>
              </form>
            </div>
          </div>
          </div>
        </Stack>
        <br/>
        
        <div>
        <hr/>2023 Plan Ahead Constructions. All rights reverved
        </div>
        
    </div>
  )
}
