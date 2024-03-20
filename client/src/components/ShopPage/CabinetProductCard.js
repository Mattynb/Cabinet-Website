import React from "react";
import "../../styles/ShopPage/CabinetProductCard.css";

function CabinetProductCard({ cabinet }) {
  return (
    <div className="cabinet-product-card">
      <div className="cabinet-image">
        <img src={cabinet.image} alt={cabinet.description} />
      </div>
      <div className="cabinet-details">
        <h1>{cabinet.item}</h1>
        <p>{cabinet.description}</p>
        <h3>USD ${cabinet.price.toFixed(2)}</h3>
      </div>
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  );
}

export default CabinetProductCard;
