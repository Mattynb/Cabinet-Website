import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/ShopPage/Shop";
import ContactForm from "./components/home/ContactSection";
import ProductsSection from "./components/home/ProductsSection";
import Cart from "./components/CartPage/Cart"

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          // Home Page
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <LoggedInText />
                  <ProductsSection />
                  <ContactForm />
                </>
              ) : (
                <>
                  <LoggedOutText />
                  <ProductsSection />
                  <ContactForm />
                </>
              )
            }
          />
          // Shop Page
          <Route path="/shop" element={<Shop />} />
          // Cart Page
          <Route path="/cart" element={<Cart />} />
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
