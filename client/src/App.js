import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Nav/Header/Header";
import Shop from "./components/ShopPage/Shop";
import BrowserRange from "./components/Home/BrowseRange";
import Checkout from './components/CheckoutPage/Checkout';
import ContactForm from "./components/Home/ContactSection";
import DesignInspiration from "./components/Gallery/DesignInspiration";
import ProductsSection from "./components/Home/ProductsSection";
import { useAuth } from "./contexts/AuthContext";
import HeroSection from "./components/Home/HeroSection";
import Cart from "./components/CartPage/Cart";
import About from "./components/AboutPage/About";

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
                <>
                  {/*<InDevelopmentText />*/}
                  <HeroSection />
                  <BrowserRange />
                  <ProductsSection />
                  <DesignInspiration />
                  <ContactForm />
                </>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/gallery' element={<DesignInspiration />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const LoggedInText = () => {
  const { account } = useAuth();

  return (
    <p>
      Hey, {account.username}! I'm happy to let you know: you are authenticated!
    </p>
  );
};

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
);

const InDevelopmentText = () => (
  <p>
    This website is still in development. Please check back later for more!
  </p>
);