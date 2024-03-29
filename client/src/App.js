
import React from 'react';
import Header from './components/Header';
import ContactForm from './components/home/ContactSection';
import { useAuth } from './contexts/AuthContext';
import DesignInspiration from './components/home/DesignInspiration';
import { BrowserRouter as Router } from 'react-router-dom';

import 'swiper/swiper-bundle.min.css';

// ... Your other import statements

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className='App'>
        <Header />

        {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
        
        <DesignInspiration/>
        <ContactForm />
      </div>
    </Router>
  );
}



const LoggedInText = () => {
  const { account } = useAuth();

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>;
};

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
);


