import React, { useState, useEffect } from "react";
import "../../styles/CartPage/Cart.css";
import CartProductCard from './CartProductCard';
import { Link } from 'react-router-dom';
import Banner from "../Banner";
import { useDispatch, useSelector } from "react-redux";

function Cart() {

  const dispatch = useDispatch();

  // State to manage the items in the shopping cart
  const cartItems = useSelector((state) => state.slice.cabinetData)

  // Function to handle adding an item to the cart
  const addToCart = (cabinet) => {
    return dispatch(addToCart({cartItems}))
  };

  // Function to handle deleting an item from the cart
  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
  };

  // Function to handle changing the quantity of an item in the cart
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

  };

  // Function to calculate total price
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2); // Limit to two decimal places
  };

  useEffect(() => {
    // Mock product object for testing
    const testProduct = {
      productId: 1,
      description: "Test Product",
      price: 10.99,
      quantity: 1, // Initial quantity
      // Other properties if needed
    };

    const testProduct2 = {
      productId: 2,
      description: "Test Product2",
      price: 8.99,
      quantity: 5, // Initial quantity
      // Other properties if needed
    };

    const testProduct3 = {
      productId: 3,
      description: "Test Product3",
      price: 15.99,
      quantity: 8, // Initial quantity
      // Other properties if needed
    };

    const testProduct4 = {
      productId: 4,
      description: "Test Product4",
      price: 15.99,
      quantity: 6, // Initial quantity
      // Other properties if needed
    };

    // Add the test product to the cart
    addToCart(testProduct);
    addToCart(testProduct2);
    addToCart(testProduct3);
    addToCart(testProduct4);
  }, []);

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