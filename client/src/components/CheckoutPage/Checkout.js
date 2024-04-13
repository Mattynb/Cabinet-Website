import { useState } from "react";
import styles from '../../styles/CheckoutPage/Checkout.module.css';

const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., sending the data to an API
        console.log({ name, email, subject, message });
    };

    return (
        <div className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div>
                <strong>Billing detail</strong>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="customer_name">Your Name
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={name}
                            id='customer_name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder=""
                            required
                        />
                    </label>
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
                    <label htmlFor="subject">Country / Region
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={subject}
                            id='subject'
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder=""
                        />
                    </label>
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
                    <label htmlFor="customer_message">Null
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
                <div className={styles.contactInfo}>
                    <div className="address">
                        <strong>Placeholder</strong>
                        <p>1</p>
                    </div>
                    <div className="phone">
                        <strong>placeholder</strong>
                        <p>2</p>
                    </div>
                    <div className="working-time">
                        <strong>Placeholder</strong>
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;