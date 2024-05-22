import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Popover, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import OnlineIndicator from './OnlineIndicator';
import style from '../../../styles/Nav/Header.module.css';
import AuthPopover from './AuthPopover';
import CartPopover from './CartPopover';
import NavPopover from './NavPopover';
import { useAuth } from '../../../contexts/AuthContext';
import { useCart } from '../../../hooks/useCart';
import { useNavigation } from '../../../hooks/useNavigation';

export default function Header() {
  const { isLoggedIn, account, logout } = useAuth();
  const { cart, cartItems, openCart, closeCart, addToCart, handleDelete, handleQuantityChange, calculateTotal } = useCart();
  const { nav, openNav, closeNav } = useNavigation();

  const [navAnchorEl, setNavAnchorEl] = useState(null);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [authAnchorEl, setAuthAnchorEl] = useState(null);

  const handleNavClick = (event) => {
    setNavAnchorEl(event.currentTarget);
    openNav(event);
  };

  const handleCartClick = (event) => {
    setCartAnchorEl(event.currentTarget);
    openCart(event);
  };

  const handleAuthClick = (event) => {
    if (event === null) {    
      setAuthAnchorEl(event.currentTarget);
    }  
    else {
      setAuthAnchorEl(event.currentTarget);
    };
  };

  const handleNavClose = () => {
    setNavAnchorEl(null);
    closeNav();
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
    closeCart();
  };


  return (
    <div className={style.header}>
      {/* Left */}
      <div className={style.frame168}>
        <Link to="/" className={style.frame168} style={{textDecoration: "none"}}>
          <img src="/pac_logo.jpeg" alt="Logo" className={style.logo}></img>
          <p className={style.icon}>Kitchen<br/> & Bath</p>
        </Link>
      </div>

      {/* Middle */}
      <div className={style.buttonContainer}>
        <Link to="/"><button className={style.button}>Home</button></Link>
        <Link to="/shop"><button className={style.button}>Shop</button></Link>
        <Link to="/about" onClick={() => window.location.href = '/about'}><button className={style.button}>About</button></Link>
        <Link to="/gallery"><button className={style.button}>Gallery</button></Link>
      </div>

      {/* Mobile Menu */}
      <div className={style.menu}>
        <IconButton onClick={handleNavClick}>
          <MenuIcon />
        </IconButton>
        <NavPopover nav={nav} closeNav={handleNavClose} anchorEl={navAnchorEl} />
      </div>

      {/* Right */}
      <div className={style.topRightContainer}>
        <IconButton>
          <img src='/assets/MagnifyingGlass.png' alt="Search" />
        </IconButton>
      {/* Cart */}
      <div style={{padding: "25px"}}>
        <IconButton onClick={handleCartClick}>
          <img src='/assets/ShoppingCart.png' alt="Cart"/>
        </IconButton>
        <CartPopover cart={cart} closeCart={handleCartClose} anchorEl={cartAnchorEl} cartItems={cartItems} handleDelete={handleDelete} handleQuantityChange={handleQuantityChange} calculateTotal={calculateTotal} />
      </div>
      {/* Login */}
      <div>
        
        <IconButton onClick={handleAuthClick}>
          <OnlineIndicator online={isLoggedIn}>
            <Avatar src={account?.username || ''} alt={account?.username || ''} />
          </OnlineIndicator>  
        </IconButton>
        <AuthPopover anchorEl={authAnchorEl} setAnchorEl={setAuthAnchorEl} isLoggedIn={isLoggedIn} account={account} logout={logout} />
      </div>
    </div>
  </div>
  );
}
