import React, { useState, useEffect } from "react";
import "../../styles/CartPage/Cart.css";
import CartProductCard from './CartProductCard';
import { Link } from 'react-router-dom';

function Cart() {
  // State to manage the items in the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (cabinet) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.id === cabinet.id);
  
    if (existingItem) {
      // If item already exists in cart, update quantity
      const updatedCartItems = cartItems.map(item => {
        if (item.id === cabinet.id) {
          return { ...item, quantity: item.quantity + cabinet.quantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // If item is not in cart, add it
      setCartItems(prevItems => [...prevItems, cabinet]);
    }
  };

  // Function to handle deleting an item from the cart
  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Function to handle changing the quantity of an item in the cart
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2); // Limit to two decimal places
  };
  
  return (
    <section className="shop">
  <div className="shop-hero">
    <img src="/shop-hero.jpg" alt="Shop Hero" />
    <div className="shop-hero-title">Cart</div>
    <div className="shop-hero-subtitle">
      <span className="shop-hero-home">Home &gt;</span>{" "}
      <span className="shop-hero-cart">Cart</span>
    </div>
  </div>
  <div className="cart-header-container">
    <div className="cart-header">
      <span className="cart-header-text product-text">Product</span>
      <span className="cart-header-text price-text">Price</span>
      <span className="cart-header-text quantity-text">Quantity</span>
      <span className="cart-header-text subtotal-text">Subtotal</span>
    </div>
  </div>
  <div className="cart-container">
    <div className="cart-scrollable">
      {/* Render CartProductCard components for each item in the cart */}
      {cartItems.map(item => (
        <CartProductCard 
          key={item.id} 
          cabinet={item} 
          onDelete={handleDelete} 
          onQuantityChange={handleQuantityChange} 
        />
      ))}
    </div>
  </div>
    <div className="cart-total">
      <div className="cart-totals-title">Cart Totals</div>
      <div className="subtotal-label">Subtotal</div>
      <div className="subtotal-value">${calculateTotal()}</div>
      <div className="total-label">Total</div>
      <div className="total-value">${calculateTotal()}</div>
      <Link to="/checkout" className="checkout-button">Checkout</Link>
    </div>
</section>
  );

}

export default Cart;