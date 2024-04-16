import { useState } from "react";
import styles from '../../styles/CheckoutPage/Checkout.module.css';
import Banner from "../Banner";
import { useLocation } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Checkout = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const totalPrice = location.state?.totalPrice || 0;


    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., sending the data to an API
        console.log({ firstname, lastname, email, subject, message });
    };

    return (
        <section className="shop">
            <div className="shop-hero">
              <img src="/shop-hero.jpg" alt="Shop Hero" />
              <div className="shop-hero-title">Checkout</div>
              <div className="shop-hero-subtitle">
                  <span className="shop-hero-home">Home &gt;</span>{" "}
                 <span className="shop-hero-cart">Checkout</span>
             </div>
            </div>

            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>

            <div className={styles.contactContainer}>
                <div>
                <strong className={styles.billingDetailsTitle}>Billing details</strong>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="first_name">First Name </label>
                        <input
                            type="text"
                            value={firstname}
                            id='first_name'
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder=""
                            required
                        />
                 
                    </div>  
                    <div className={styles.inputGroup}>
                    <label htmlFor="last_name">Last Name  </label>
                        <input
                            type="text"
                            value={lastname}
                            id='last_name'
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder=""
                            required
                        />   
            
                    </div>
                    <label htmlFor="customer_email">Company Name (optional)
                        <input
                            style={{ display: 'block' }}
                            type="email"
                            value={email}
                            id='customer_email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    
                    <label htmlFor="country" className={styles.inputLabel} > Country </label>
                        <CountryDropdown
                         country={country}
                         region={region}
                         onCountryChange={(val) => setCountry(val)}
                         valueType="short"
                        />

        

                    <label htmlFor="customer_message">Street address
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">Town / City
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">Province
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">ZIP code
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">Phone
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">Email address
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Additional infomation"
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                </div>
                <div className={styles.productSubtotal}>
                    <div className={styles.productTitle}><strong>Product</strong></div>
                    <div className={styles.subtotalTitle}><strong>Subtotal</strong></div>
                
                </div>

                <div>Total Price: ${totalPrice}</div>


                <div className={styles.additionalInfo}>
                      Your personal data will be used to support your experience throughout this website, 
                      to manage access to your account, and for other purposes described in our privacy policy.
                </div>


                <div className={styles.placeOrderButton}>
                    <button type="submit">Place Order</button>
               </div>
            </div>


            <Banner />
        </section>
    );
};

export default Checkout;