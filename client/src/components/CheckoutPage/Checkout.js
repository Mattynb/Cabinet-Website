import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/slice";
import styles from '../../styles/CheckoutPage/Checkout.module.css';
import Banner from "../Banner";
import { useLocation } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import axios from "../../utils/axios";


const Checkout = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [townCity, setTownCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const location = useLocation();
    const cartItems = useSelector(state => state.slice.cabinetData); // Access cart items from Redux store
    const totalPrice = useSelector(state =>
         state.slice.cabinetData.reduce((total, item) => total + (item.price * item.quantity), 0)); // Calculate total price using Redux state


    // useEffect to update totalPrice when cartItems change
    useEffect(() => {
    }, [cartItems]);

    // Function to check if all form fields are filled
    const checkFormValidity = () => {
        if (
            firstname &&
            lastname &&
            email &&
            country &&
            streetAddress &&
            townCity &&
            province &&
            zipCode &&
            phone
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    // useEffect to check form validity whenever form state changes
    useEffect(() => {
        checkFormValidity();
    }, [firstname, lastname, email, country, streetAddress, townCity, province, zipCode, phone]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        if (isFormValid) {
            //POST request to the backend endpoint
            axios.post('/api/sendEmailOnCheckout', {
                firstname,
                lastname,
                email,
                message,
                totalPrice,
                cartItems
            })
            .then(response => {
                console.log(response.data);
                alert('Order placed successfully!');
            })
            .catch(error => {
                console.error('Error placing order:', error);
                alert('Error placing order. Please try again.');
            });
        } else {
            alert("Please fill in all required fields.");
        }
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
                <form onSubmit={handlePlaceOrder} className={styles.form}>
                   <div className= {styles.inputGroup}> 
                    <div className={styles.firstname}>
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
                    <div className={styles.lastname}>
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
                    </div> 
                    <label htmlFor="customer_email">Company Name (optional)
                        <input
                            style={{ display: 'block' }}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
                    

                    <div className={styles.setCountry}>
                    <label htmlFor="country"> Country </label>
                        <CountryDropdown
                         value={country}
                         onChange={(val) => setCountry(val)}
                         valueType="full"
                         required
                         className={styles.countryDropdown}
                        />
                   </div>

    
                    <label htmlFor="streetAddress">Street address
                        <input
                             style={{ display: 'block' }}
                             type="text"
                             value={streetAddress}
                             onChange={(e) => setStreetAddress(e.target.value)}
                             required
                        />
                    </label>
                    
                    <label htmlFor="townCity">Town / City
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={townCity}
                            onChange={(e) => setTownCity(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="province">Province
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="zipCode">ZIP code
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="phone">Phone
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="customer_email">Email address
                        <input
                            type="email"
                            id="email_address"
                            style={{ display: 'block' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="customer_message">
                        <input
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Additional Information"
                            required
                        />
                    </label>
                </form>
                </div>
                <div className={styles.checkoutContainer}>
                  <div className={styles.productSubtotal}>
                    <div className={styles.productTitle}><strong>Product</strong></div>
                    <div className={styles.subtotalTitle}><strong>Subtotal</strong></div>
                  </div>

                  <div className={styles.itemTitle}>Item 1</div>

                  <div className={styles.totalPrice}>
                    <div className={styles.totalTitle}>Total</div>
                    <div className={styles.price}> ${totalPrice}</div>
                  </div>
            

                <div className={styles.additionalInfo}>
                <div className={styles.additionalInfoLine}></div> 
                      Your personal data will be used to support your experience throughout this website, 
                      to manage access to your account, and for other purposes described in our <strong>privacy policy. </strong>
                </div>


                <div className={styles.placeOrderButton}>
                    <button type="submit" onClick={handlePlaceOrder}>Place Order</button>
               </div>
               </div>
            </div>


            <Banner />
        </section>
    );
};

export default Checkout;