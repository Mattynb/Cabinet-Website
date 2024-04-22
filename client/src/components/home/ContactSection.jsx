import { useState } from "react";
import styles from '../../styles/home/ContactForm.module.css';
import axios from "../../utils/axios";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., sending the data to an API
        try {
            await axios.post("/api/contact", {
                name,
                email, 
                message, 
                "category": "BUY"
            });
            alert('We have received your message! A representative will contact you soon. Thank you');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.contactSection}>
            <h2 className={styles.header}>Get A Free Design Today</h2>
            <p className={styles.paragraph}>For more information about our product & services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!</p>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <div className="address">
                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2889 0.280762C8.38069 0.283749 5.59256 1.29097 3.53614 3.08147C1.47971 4.87198 0.322901 7.29957 0.31947 9.83172C0.315986 11.901 1.0923 13.9141 2.52931 15.5623C2.52931 15.5623 2.82848 15.9053 2.87735 15.9548L11.2889 24.5923L19.7045 15.9504C19.7484 15.9044 20.0485 15.5623 20.0485 15.5623L20.0495 15.5597C21.4858 13.9123 22.2618 11.9001 22.2584 9.83172C22.2549 7.29957 21.0981 4.87198 19.0417 3.08147C16.9853 1.29097 14.1971 0.283749 11.2889 0.280762ZM11.2889 13.3048C10.5 13.3048 9.72878 13.1011 9.07281 12.7195C8.41684 12.3379 7.90557 11.7954 7.60366 11.1608C7.30175 10.5262 7.22276 9.82787 7.37667 9.15416C7.53058 8.48045 7.91049 7.86161 8.46835 7.37589C9.0262 6.89017 9.73695 6.55939 10.5107 6.42538C11.2845 6.29137 12.0865 6.36015 12.8154 6.62302C13.5443 6.88589 14.1673 7.33104 14.6056 7.90219C15.0439 8.47333 15.2778 9.14481 15.2778 9.83172C15.2765 10.7525 14.8558 11.6352 14.108 12.2863C13.3603 12.9374 12.3464 13.3037 11.2889 13.3048Z" fill="black" />
                        </svg>
                        <strong>Address</strong>
                        <p>50 New Salem Street,{"\n"}Wakefield, MA 01880, USA</p>
                    </div>
                    <div className="phone">
                        <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.8793 19.4373L20.8122 15.3665C20.5727 15.1742 20.2579 15.0716 19.9344 15.0804C19.6109 15.0893 19.3039 15.2088 19.0783 15.4139L16.0953 18.1244C15.3773 18.0033 13.9338 17.6057 12.448 16.2961C10.9621 14.9821 10.5121 13.7034 10.3787 13.0734L13.444 10.4367C13.6763 10.2375 13.8119 9.96618 13.8219 9.68024C13.8319 9.3943 13.7156 9.11614 13.4976 8.90463L8.89164 4.42855C8.67355 4.21637 8.37044 4.08767 8.04668 4.06978C7.72292 4.05188 7.40403 4.14621 7.15772 4.33273L4.45275 6.38243C4.23724 6.57354 4.10861 6.82789 4.09126 7.09724C4.07256 7.37258 3.71605 13.8951 9.44011 18.9549C14.4337 23.366 20.6888 23.6887 22.4115 23.6887C22.6633 23.6887 22.8178 23.6821 22.859 23.6799C23.1638 23.6648 23.4515 23.5507 23.6667 23.3594L25.9853 20.9683C26.1972 20.7513 26.3047 20.4698 26.2849 20.1837C26.2652 19.8977 26.1196 19.6298 25.8793 19.4373Z" fill="black" />
                        </svg>
                        <strong>Phone</strong>
                        <p>+1 (781)-496-8660</p>
                    </div>
                    <div className="working-time">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_113_2750)">
                                <path d="M23.2584 10.3567C23.2584 13.0441 22.0501 15.6215 19.8995 17.5218C17.7488 19.422 14.8318 20.4896 11.7903 20.4896C8.74881 20.4896 5.83186 19.422 3.68118 17.5218C1.5305 15.6215 0.322266 13.0441 0.322266 10.3567C0.322266 7.66934 1.5305 5.09201 3.68118 3.19173C5.83186 1.29144 8.74881 0.223877 11.7903 0.223877C14.8318 0.223877 17.7488 1.29144 19.8995 3.19173C22.0501 5.09201 23.2584 7.66934 23.2584 10.3567ZM11.7903 4.65701C11.7903 4.48904 11.7148 4.32796 11.5804 4.20919C11.446 4.09043 11.2637 4.0237 11.0736 4.0237C10.8835 4.0237 10.7012 4.09043 10.5667 4.20919C10.4323 4.32796 10.3568 4.48904 10.3568 4.65701V11.6234C10.3569 11.735 10.3903 11.8446 10.4537 11.9412C10.5172 12.0377 10.6084 12.1177 10.7181 12.1731L15.7353 14.7063C15.9 14.7849 16.0929 14.8035 16.2729 14.7581C16.4528 14.7127 16.6056 14.6069 16.6984 14.4633C16.7913 14.3198 16.8169 14.1498 16.7698 13.9897C16.7227 13.8297 16.6066 13.6923 16.4464 13.6069L11.7903 11.256V4.65701Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_113_2750">
                                    <rect width="22.9361" height="20.2657" fill="white" transform="translate(0.322266 0.223877)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <strong>Working Time</strong>
                        <p>Monday-Friday:{`\n`}9:00 - 22:00</p>
                        <p>Saturday-Sunday:{`\n`}9:00 - 21:00</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="customer_name">Your Name
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={name}
                            id='customer_name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Smith"
                            required
                        />
                    </label>
                    <label htmlFor="customer_email">Email address
                        <input
                            style={{ display: 'block' }}
                            type="email"
                            value={email}
                            id='customer_email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Abc@def.com"
                            required
                        />
                    </label>
                    <label htmlFor="subject">Subject
                        <input
                            style={{ display: 'block' }}
                            type="text"
                            value={subject}
                            id='subject'
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject (optional)"
                        />
                    </label>
                    <label htmlFor="customer_message">Message
                        <textarea
                            style={{ display: 'block' }}
                            value={message}
                            id='customer_message'
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Hi! I'd like to ask about"
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;