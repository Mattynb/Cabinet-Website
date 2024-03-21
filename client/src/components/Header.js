import {Fragment, useState} from 'react'
import {
  AppBar,
  IconButton,
  Avatar,
  Popover,
  List,
  ListSubheader,
  ListItemButton,
  Button,
  Stack,
} from '@mui/material'

import OnlineIndicator from './OnlineIndicator'
import AuthModal from './AuthModal'
import {useAuth} from '../contexts/AuthContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Search from '@mui/icons-material/Search';
import style from '../styles/Nav/Header.module.css';

export default function Header() {
  const {isLoggedIn, account, logout} = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [popover, setPopover] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const [register, setRegister] = useState(false)

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

  return (
    <div className={style.header} position='static'>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
        <Stack direction="row" spacing={2}>
          <p>ICON HERE</p>
          <p class={style.icon}>Kitchen<br/> & Bath</p>
          </Stack>
        </div>
        <div>
        <Stack direction="row" spacing={2}>
          <Button href="#">Home</Button>
          <Button href="#">Shop</Button>
          <Button href="#">About</Button>
          <Button href="#">Galery</Button>
        </Stack>
        </div>
        <div>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
        
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
