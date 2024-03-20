import React from "react";
import CabinetProductCard from "./CabinetProductCard";
import cabinetsData from "../../constants/cabinetsData";
import "../../styles/ShopPage/Shop.css";

function Shop() {
  return (
    <section className="shop">
      <div className="shop-hero">
        <img src="/shop-hero.jpg" alt="Shop Hero" />
        <div className="shop-hero-title">Shop</div>
        <div className="shop-hero-subtitle">
          <span className="shop-hero-home">Home &gt;</span>{" "}
          <span className="shop-hero-shop">Shop</span>
        </div>
      </div>
      <div className="cabinet-products">
        {cabinetsData.map((cabinet) => (
          <CabinetProductCard key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
