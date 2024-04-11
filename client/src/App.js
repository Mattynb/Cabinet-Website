
import React from 'react';

import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from "./components/Footer";
import Shop from "./components/ShopPage/Shop";
import ContactForm from './components/home/ContactSection';
import ProductsSection from "./components/home/ProductsSection";
import DesignInspiration from './components/home/DesignInspiration';
import Checkout from './components/CheckoutPage/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          [// Home Page]
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <LoggedInText />
                  <ProductsSection />
                  <DesignInspiration/>
                  <ContactForm />
                </>
              ) : (
                <>
                  <LoggedOutText />
                  <ProductsSection />
                  <DesignInspiration/>
                  <ContactForm />
                </>
              )
            }
          />
          [// Shop Page]
          <Route path="/shop" element={<Shop />} />
          <Route path='/gallery' element={<DesignInspiration />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
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