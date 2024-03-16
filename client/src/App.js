import { useState } from 'react'
import Header from './components/Header'
import { useAuth } from './contexts/AuthContext'

export default function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='App'>
      <Header />

      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
      <ContactForm />
    </div>
  )
}

const LoggedInText = () => {
  const { account } = useAuth()

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)


const ContactForm = () => {
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
    <div className="contact-section">
      <h2>Get A Free Design Today</h2>
      <p>For more information about our product & services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!</p>

      <div className="contact-info">
        <div className="address">
          <strong>Address</strong>
          <p>50 New Salem Street, Wakefield, MA 01880, USA</p>
        </div>
        <div className="phone">
          <strong>Phone</strong>
          <p>+1 (781)-496-8660</p>
        </div>
        <div className="working-time">
          <strong>Working Time</strong>
          <p>Monday-Friday: 9:00 - 22:00</p>
          <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject (optional)"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
