import {Fragment, useState} from 'react'
import {
  IconButton,
  Avatar,
  Popover,
  List,
  ListSubheader,
  ListItemButton,
  Stack,
  ListItemText,
  ListItem,
} from '@mui/material'

import OnlineIndicator from './OnlineIndicator'
import AuthModal from './AuthModal'
import {useAuth} from '../contexts/AuthContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Search from '@mui/icons-material/Search';
import style from '../styles/Nav/Header.module.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "../components/ShopPage/Shop";

export default function Header() {
  const {isLoggedIn, account, logout} = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [popover, setPopover] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const [register, setRegister] = useState(false)

  const [cart, setCart] = useState(false)

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

  return (
    <div className={style.header} position='static'>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
        <Stack direction="row" spacing={2}>
          <img src="/pac_logo.jpeg" alt="Logo" width="80" height="80"></img>
          <p class={style.icon}>Kitchen<br/> & Bath</p>
        </Stack>
        </div>
        <div>
        <Stack direction="row" spacing={2}>
            <button class={style.button} href="#">Home</button>
            <button class={style.button} path="#">Shop</button>
            <button class={style.button} href="#">About</button>
            <button class={style.button} href="#">Galery</button>
        </Stack>
        </div>
        <div>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton onClick={openCart}>
          <AddShoppingCartIcon />
        </IconButton>
        <Popover
        anchorEl={anchorEl}
        open={cart}
        onClose={closeCart}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}>
        <List style={{minWidth: '417px'}}>
          <div class={style.shoppingCart}>Shopping Cart</div>
          <br/>
          <ListItem>Empty</ListItem>
          <ListItem>Empty</ListItem>
          <ListItem>Empty</ListItem>
          <br/>
          <div class={style.subtotal}>Subtotal</div>
        </List>
        <div class={style.cartButtons}>
          <button class={style.cartButton} href="#">Cart</button>
          <button class={style.cartButton} href="#">Checkout</button>
        </div>
      </Popover>
        
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
      </Stack>
    </div>
  )
}
