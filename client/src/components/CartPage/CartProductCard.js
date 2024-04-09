import React from "react";
import "../../styles/CartPage/CartProductCard.css";

function CartProductCard({ cabinet, onQuantityChange, onDelete }) {

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

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    const subtotal = cabinet.price * cabinet.quantity;
    return subtotal.toFixed(2);
  };

  return (
    <div className="product-card">
      <img src={cabinet.image} alt={cabinet.name} />
      <div className="product-details">
        <h3>{cabinet.name}</h3>
        <p>${cabinet.price}</p>
        <div>
          <input
            type="number"
            value={cabinet.quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="subtotal-container">${calculateSubtotal()}</div>
        {/* Delete button */}
        <button onClick={() => onDelete(cabinet.id)}>
          <img src="/cartpage-images/DeleteButton.png" alt="Delete" />
        </button>
      </div>
    </div>
  );
}

export default CartProductCard;