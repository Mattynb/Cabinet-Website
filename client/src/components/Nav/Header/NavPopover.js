import React from 'react';
import { Popover, List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import style from '../../../styles/Nav/Header.module.css';

export default function NavPopover({ nav, closeNav, anchorEl }) {
  return (
    <Popover
      anchorEl={anchorEl}
      open={nav}
      onClose={closeNav}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <List style={{ width: '300px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to="/"><ListItemButton className={style.button}>Home</ListItemButton></Link>
        <Link to="/shop"><ListItemButton className={style.button}>Shop</ListItemButton></Link>
        <Link to="/about" onClick={() => window.location.href = '/about'}><ListItemButton className={style.button}>About</ListItemButton></Link>
        <Link to="/gallery"><ListItemButton className={style.button}>Gallery</ListItemButton></Link>
      </List>
    </Popover>
  );
}
