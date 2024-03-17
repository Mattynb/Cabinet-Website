import React from 'react';
import Header from './components/Header';
import ContactForm from './components/home/ContactSection';
import { useAuth } from './contexts/AuthContext';

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

