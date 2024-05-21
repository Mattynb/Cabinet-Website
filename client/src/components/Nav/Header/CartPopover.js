import React from 'react';
import { Popover, IconButton } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from 'react-router-dom';
import NavCartItem from '../../NavCartItem';
import style from '../../../styles/Nav/Header.module.css';
export default function CartPopover({ cart, closeCart, anchorEl, cartItems, handleDelete, handleQuantityChange, calculateTotal }) {
  return (
    <Popover
      anchorEl={anchorEl}
      open={cart}
      onClose={closeCart}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <div className={style.cartPopout}>
        <div className={style.group150}>
          <div className={style.cartflex}>
            <div className={style.shoppingCart}>Shopping Cart</div>
            <IconButton onClick={closeCart}>
              <RemoveShoppingCartIcon />
            </IconButton>
          </div>
          <div className={style.line11}></div>
          <div className={style.cartContainer}>
            <div className={style.cartScrollable}>
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
          <div className={style.cartflex}>
            <div className={style.subtotal}>Subtotal</div>
            <div className={style.subtotalcount}>${calculateTotal()}</div>
          </div>
          <div className={style.line12}></div>
          <div className={style.frame153}>
            <div className={style.cartButtons}>
              <Link to={{
                pathname: "/cart",
                state: { cartItems: cartItems, totalPrice: calculateTotal() }
              }}>
                <button className={style.cartButton}>Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}
