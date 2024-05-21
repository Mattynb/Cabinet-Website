import React from "react";
import CabinetProductCard from "../ShopPage/CabinetProductCard";
import cabinetsData from "../../constants/cabinetsData";
import "../../styles/Home/ProductsSection.css";
import { Link } from "react-router-dom";

function ProductsSection() {
  return (
    <section className="products-section">
      <div className="products-title">
        <h1>Our Products</h1>
      </div>
      <div className="cabinet-products">
        {cabinetsData.slice(0, 8).map((cabinet) => (
          <CabinetProductCard key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>
      <div className="show-more-link-container">
        <Link to="/shop" className="show-more-link">
          <button className="show-more-btn">Show More</button>
        </Link>
      </div>
    </section>
  );
}

export default ProductsSection;
