import {
  Avatar,
  IconButton,
  List,
  ListSubheader,
  ListItemButton,
  Popover
} from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import Search from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import style from '../styles/Nav/Header.module.css'
import AuthModal from './AuthModal'
import OnlineIndicator from './OnlineIndicator'
import MenuIcon from '@mui/icons-material/Menu';
import NavCartItem from './NavCartItem';
import cabinetsData from "../constants/cabinetsData";

export default function Header() {
  const { isLoggedIn, account, logout } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [popover, setPopover] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const [register, setRegister] = useState(false)

  const [cart, setCart] = useState(false)
  const [nav, setNav] = useState(false)

  const openPopover = (e) => {
    setPopover(true)
    setAnchorEl(e.currentTarget)
  }
  const closePopover = () => {
    setPopover(false)
    setAnchorEl(null)
  }
  const clickLogin = () => {
    setRegister(false)
    setAuthModal(true)
    closePopover()
  }
  const clickRegister = () => {
    setRegister(true)
    setAuthModal(true)
    closePopover()
  }

  // cart
  const openCart = (e) => {
    setCart(true)
    setAnchorEl(e.currentTarget)
  }
  const closeCart = () => {
    setCart(false)
    setAnchorEl(null)
  }

  const openNav = (e) => {
    setNav(true)
    setAnchorEl(e.currentTarget)
  }
  const closeNav = () => {
    setNav(false)
    setAnchorEl(null)
  }

  // Cart Popover
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

  useEffect(() => {
    // Mock product object for testing
    const testProduct = {
      id: 1,
      name: "Asgaard sofa",
      price: 10.99,
      quantity: 1, // Initial quantity
      // Other properties if needed
    };

    const testProduct2 = {
      id: 2,
      name: "Casaliving",
      price: 8.99,
      quantity: 5, // Initial quantity
      // Other properties if needed
    };

    // Add the test product to the cart
    addToCart(testProduct);
    addToCart(testProduct2);
  }, []);

  // refresh about page onload to show 3D model
  function refreshPage(){ 
    window.location.href = '/about';
  };

  return (
    <div className={style.header}>
      {/* Left */}
      <div className={style.frame168} >
        <img src="/pac_logo.jpeg" alt="Logo" className={style.logo}></img>
        <p class={style.icon}>Kitchen<br/> & Bath</p>
      </div>
      {/* Middle */}
      <div className={style.buttonContainer}>
        <Link to="/"><button class={style.button}>Home</button></Link>
        <Link to="/shop"><button class={style.button} >Shop</button></Link>
        <Link to="/about" onClick={ refreshPage }><button class={style.button} >About</button></Link>
        <Link to="/gallery"><button class={style.button} >Gallery</button></Link>
      </div>
      <div className={style.menu}>
      <IconButton onClick={openNav}>
        <MenuIcon />
      </IconButton>
      <Popover
          anchorEl={anchorEl}
          open={nav}
          onClose={closeNav}
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          transformOrigin={{vertical: 'top', horizontal: 'center'}}>
          <List style={{width: '300px', height: '300px', display:'flex', flexDirection:'column', justifyContent: 'space-around', alignItems:'center'}}>
            <Link to="/"><ListItemButton class={style.button}>Home</ListItemButton></Link>
            <Link to="/shop"><ListItemButton class={style.button}>Shop</ListItemButton></Link>
            <Link to="/about" onClick={ refreshPage }><ListItemButton class={style.button}>About</ListItemButton></Link>
            <Link to="/gallery"><ListItemButton class={style.button}>Gallery</ListItemButton></Link>
          </List>
        </Popover>
      </div>
      {/* Right */}
      <div className={style.topRightContainer}>
        <IconButton>
          <Search />
        </IconButton>
        {/* Cart */}
        <div>
          <IconButton onClick={openCart}>
            <ShoppingCartIcon />
          </IconButton>
          <Popover
          anchorEl={anchorEl}
          open={cart}
          onClose={closeCart}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          transformOrigin={{vertical: 'top', horizontal: 'right'}}>
          <div class={style.cartPopout}>
            <div class={style.group150}>
              <div class={style.cartflex}>
                <div class={style.shoppingCart}>Shopping Cart</div> 
                <IconButton onClick={closeCart}>
                  <RemoveShoppingCartIcon /> 
                </IconButton>
              </div>
              <div class={style.line11}></div>
              <div className={style.cartContainer}>
                <div className={style.cartScrollable}>
                  {/* Render CartProductCard components for each item in the cart */}
                  {cartItems.map(item => (
                    <NavCartItem 
                      key={item.id} 
                      cabinet={item} 
                      onDelete={handleDelete} 
                      onQuantityChange={handleQuantityChange} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div class={style.cartflex}>
                <div class={style.subtotal}>Subtotal</div> 
                <div className={style.subtotalcount}>${calculateTotal()}</div>
              </div>
              <div class={style.line12}></div>
              <div class={style.frame153}>
                <div class={style.cartButtons}>
                <Link to={{
                      pathname: "/cart",
                      state: { cartItems: cartItems,
                      totalPrice: calculateTotal() }  // Pass cartItems to the checkout page
                  }}><button class={style.cartButton}>Cart</button></Link>
                </div>
              </div>
            </div>
          </div>
          </Popover>
        </div>
        {/* Login */}
        <div>
          <IconButton onClick={openPopover}>
            <OnlineIndicator online={isLoggedIn}>
              <Avatar src={account?.username || ''} alt={account?.username || ''} />
            </OnlineIndicator>
          </IconButton>
          
          <Popover
            anchorEl={anchorEl}
            open={popover}
            onClose={closePopover}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}>
            <List style={{minWidth: '100px'}}>
              <ListSubheader style={{textAlign: 'center'}}>
                Hello, {isLoggedIn ? account.username : 'Guest'}
              </ListSubheader>

              {isLoggedIn ? (
                <ListItemButton onClick={logout}>Logout</ListItemButton>
              ) : (
                <Fragment>
                  <ListItemButton onClick={clickLogin}>Login</ListItemButton>
                  <ListItemButton onClick={clickRegister}>Reigster</ListItemButton>
                </Fragment>
              )}
            </List>
          </Popover>

          <AuthModal
            open={authModal}
            close={() => setAuthModal(false)}
            isRegisterMode={register}
            toggleRegister={() => setRegister((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  )
}
