import React from "react";
import style from "../styles/Nav/Cart.module.css";


function NavCartItem({ cabinet, onQuantityChange, onDelete }) {

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    // If 0 is deletes he cart or 0 is not allowed idk
    // Check if onQuantityChange is a function before calling it
    if (typeof onQuantityChange === 'function') {
      if (newQuantity === 0) {
        // If new quantity is 0, call onDelete to remove the item
        onDelete(cabinet.id);
      } else {
        // Otherwise, call onQuantityChange to update the quantity
        onQuantityChange(cabinet.id, newQuantity);
      }
    } else {
      console.error("onQuantityChange is not a function");
    }
  };

  return (
    <div className={style.productCard}>
      <img src={cabinet.image} alt={cabinet.name} />
      <div className={style.productDetails}>
        <div className={style.group148}>
          <h3>{cabinet.name}</h3>
          <div className={style.group147}>
            <div>
              <input
                type="number"
                value={cabinet.quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <p>X</p>
            <p className={style.price}>${cabinet.price}</p>
          </div>
        </div>
        {/* Delete button */}
        <button onClick={() => onDelete(cabinet.id)}>
          <img src="/remove.png" alt="Delete" />
        </button>
      </div>
    </div>
  );
}

export default NavCartItem;