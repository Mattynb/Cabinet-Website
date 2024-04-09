
import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';
import Shop from "./components/ShopPage/Shop";
import BrowserRange from "./components/home/BrowseRange";
import ContactForm from './components/home/ContactSection';
import DesignInspiration from './components/home/DesignInspiration';
import ProductsSection from './components/home/ProductsSection';
import { useAuth } from './contexts/AuthContext';
import Cart from "./components/CartPage/Cart"

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <LoggedInText />
                  <BrowserRange />
                  <ProductsSection />
                  <DesignInspiration />
                  <ContactForm />
                </>
              ) : (
                <>
                  <LoggedOutText />
                  <BrowserRange />
                  <ProductsSection />
                  <DesignInspiration />
                  <ContactForm />
                </>
              )
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/gallery' element={<DesignInspiration />} />
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