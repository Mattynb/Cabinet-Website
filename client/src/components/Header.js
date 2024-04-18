import {
  Avatar,
  IconButton,
  List,
  ListSubheader,
  ListItemButton,
  ListItem,
  Popover
} from '@mui/material'
import { Fragment, useState } from 'react'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import Search from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import style from '../styles/Nav/Header.module.css'
import AuthModal from './AuthModal'
import OnlineIndicator from './OnlineIndicator'
import MenuIcon from '@mui/icons-material/Menu';
import CartProductCard from './CartPage/CartProductCard';

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
    <div className={style.header}>
      <div className={style.frame168} >
        <img src="/pac_logo.jpeg" alt="Logo" className={style.logo}></img>
        <p class={style.icon}>Kitchen<br/> & Bath</p>
      </div>

      <div className={style.buttonContainer}>
        <Link to="/"><button class={style.button}>Home</button></Link>
        <Link to="/shop"><button class={style.button} >Shop</button></Link>
        <Link to="/about"><button class={style.button} >About</button></Link>
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
          <List style={{width: '300px'}}>
          
            <Link to="/"><ListItemButton><button class={style.button}>Home</button></ListItemButton></Link>
            <Link to="/shop"><ListItemButton><button class={style.button}>Shop</button></ListItemButton></Link>
            <Link to="/about"><ListItemButton><button class={style.button}>About</button></ListItemButton></Link>
            <Link to="/gallery"><ListItemButton><button class={style.button}>Gallery</button></ListItemButton></Link>
            
          </List>
        </Popover>
      </div>
      
      <div className={style.topRightContainer}>
        <IconButton>
          <Search />
        </IconButton>

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
          <List class={style.cartPopout}>
            <div class={style.group150}>
            <ListItem class={style.cartflex}>
              <div class={style.shoppingCart}>Shopping Cart</div> 
              <RemoveShoppingCartIcon /> 
            </ListItem>
            <br/>
            <div class={style.line11}></div>

            <div class={style.cartitem}>Empty</div>
            <div class={style.cartitem}>Empty</div>
            <div class={style.cartitem}>Empty</div>
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
            
            </div>
            <div class={style.cartflex}>
              <div class={style.subtotal}>Subtotal</div> 
              <div className="total-value">${calculateTotal()}</div>
              <div class={style.subtotalcount}>Rs. 520,000,000</div>
            </div>
          </List>
            <div class={style.line12}></div>
            <div class={style.frame153}>
              <div class={style.cartButtons}>
              <Link to="/cart"><button class={style.cartButton} href="#">Cart</button></Link>
              </div>
            </div>
        </Popover>
      </div>

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
