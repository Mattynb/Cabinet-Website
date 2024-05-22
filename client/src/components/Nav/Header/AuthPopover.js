import React from 'react';
import { Popover, List, ListSubheader, ListItemButton } from '@mui/material';
import AuthModal from '../../AuthModal';

export default function AuthPopover({ anchorEl, setAnchorEl, isLoggedIn, account, logout }) {
  const [authModal, setAuthModal] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const clickLogin = () => {
    setRegister(false);
    setAuthModal(true);
  };

  const clickRegister = () => {
    setRegister(true);
    setAuthModal(true);
  };



  return (
    <Popover
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <List style={{ minWidth: '100px' }}>
        <ListSubheader style={{ textAlign: 'center' }}>
          Welcome, {isLoggedIn ? account.username : 'Guest'}
        </ListSubheader>

        {isLoggedIn ? (
          <ListItemButton onClick={logout}>Logout</ListItemButton>
        ) : (
          <>
            <ListItemButton onClick={clickLogin}>Login</ListItemButton>
            <ListItemButton onClick={clickRegister}>Register</ListItemButton>
          </>
        )}
      </List>

      {/* Auth Modal is where the login and register forms are */}
      <AuthModal
        open={authModal}
        close={() => setAuthModal(false)}
        isRegisterMode={register}
        toggleRegister={() => setRegister((prev) => !prev)}
      />
    </Popover>
  );
}
