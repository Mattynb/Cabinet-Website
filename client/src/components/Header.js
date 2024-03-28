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
  Divider,
} from '@mui/material'

import OnlineIndicator from './OnlineIndicator'
import AuthModal from './AuthModal'
import {useAuth} from '../contexts/AuthContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Search from '@mui/icons-material/Search';
import style from '../styles/Nav/Header.module.css';
import { Link } from "react-router-dom";
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
          <img src="/pac_logo.jpeg" alt="Logo" width="80" height="90"></img>
          <p class={style.icon}>Kitchen<br/> & Bath</p>
        </Stack>
        </div>
        <div class={style.buttonContainer}>
        <Stack direction="row" spacing={4}>
            <Link to="/"><button class={style.button} href="#">Home</button></Link>
            <Link to="/shop"><button class={style.button} >Shop</button></Link>
            <Link to="/about"><button class={style.button} href="#">About</button></Link>
            <Link to="/galery"><button class={style.button} href="#">Galery</button></Link>
        </Stack>
        </div>
        <div>
        <IconButton>
          <Search />
        </IconButton>
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
          
          </div>
          <div class={style.cartflex}>
            <div class={style.subtotal}>Subtotal</div> 
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
