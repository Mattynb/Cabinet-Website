import { useState, useEffect } from 'react';

export function useCart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = (e) => {
    setCart(true);
    setAnchorEl(e.currentTarget);
  };

  const closeCart = () => {
    setCart(false);
    setAnchorEl(null);
  };

  const addToCart = (cabinet) => {
    const existingItem = cartItems.find(item => item.id === cabinet.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === cabinet.id) {
          return { ...item, quantity: item.quantity + cabinet.quantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, cabinet]);
    }
  };

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  useEffect(() => {
    const testProduct = {
      id: 1,
      name: "Asgaard sofa",
      price: 10.99,
      quantity: 1,
    };

    const testProduct2 = {
      id: 2,
      name: "Casaliving",
      price: 8.99,
      quantity: 5,
    };

    addToCart(testProduct);
    addToCart(testProduct2);
  }, []);

  return {
    cart,
    cartItems,
    openCart,
    closeCart,
    addToCart,
    handleDelete,
    handleQuantityChange,
    calculateTotal,
    cartAnchorEl: anchorEl,
    setAnchorEl
  };
}
