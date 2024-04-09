import React, { useState, useEffect, useRef } from "react";
import CabinetProductCard from "./CabinetProductCard";
import cabinetsData from "../../constants/cabinetsData";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import "../../styles/ShopPage/Shop.css";

function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [filterType, setFilterType] = useState(null);
  const [filteredAndSortedItems, setFilteredAndSortedItems] =
    useState(cabinetsData);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    let filteredItems = filterType
      ? cabinetsData.filter((item) =>
          item.description.toLowerCase().includes(filterType.toLowerCase())
        )
      : cabinetsData;

    switch (sortOption) {
      case "A-Z":
        filteredItems.sort((a, b) => a.item.localeCompare(b.item));
        break;
      case "Z-A":
        filteredItems.sort((a, b) => b.item.localeCompare(a.item));
        break;
      case "low-to-high":
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        filteredItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredAndSortedItems(filteredItems);
  }, [sortOption, filterType]);

  function toggleFilterDropdown() {
    setIsFilterOpen(!isFilterOpen);
  }

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterType(event.target.value);
    setIsFilterOpen(false);
  }

  return (
    <section className="shop">
      <div className="shop-hero">
        <img src="/shop-hero.jpg" alt="Shop Hero" />
        <div className="shop-hero-title">Shop</div>
        <div className="shop-hero-subtitle">
          <Link to="/" className="show-more-link">
            <span className="shop-hero-home">Home &gt;</span>{" "}
          </Link>
          <span className="shop-hero-shop"> Shop</span>
        </div>
      </div>
      <div className="control-panel">
        <div className="filter-sort">
          <div className="filter">
            <img
              onClick={toggleFilterDropdown}
              ref={filterRef}
              src="/system-uicons_filtering.svg"
              alt="Filter Icon"
            />
            <span>Filter</span>
          </div>
          {isFilterOpen && (
            <div className="filter-dropdown" ref={filterRef}>
              <div className="dropdown-header">Type</div>
              <label className="dropdown-container">
                Base
                <input
                  type="radio"
                  name="type"
                  value="base"
                  onChange={handleFilterChange}
                  checked={filterType === "base"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Wall
                <input
                  type="radio"
                  name="type"
                  value="wall"
                  onChange={handleFilterChange}
                  checked={filterType === "wall"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Tall
                <input
                  type="radio"
                  name="type"
                  value="tall"
                  onChange={handleFilterChange}
                  checked={filterType === "tall"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Mouldings
                <input
                  type="radio"
                  name="type"
                  value="moulding"
                  onChange={handleFilterChange}
                  checked={filterType === "moulding"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Accessories
                <input
                  type="radio"
                  name="type"
                  value="accessories"
                  onChange={handleFilterChange}
                  checked={filterType === "accessories"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Vanities
                <input
                  type="radio"
                  name="type"
                  value="vanities"
                  onChange={handleFilterChange}
                  checked={filterType === "vanities"}
                />
                <span className="checkmark"></span>
              </label>
              <label className="dropdown-container">
                Panels
                <input
                  type="radio"
                  name="type"
                  value="panels"
                  onChange={handleFilterChange}
                  checked={filterType === "panels"}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          )}
          <div className="results">Showing 1–16 of 32 results</div>
        </div>
        <div className="sort-by">
          <label for="sort">Sort by</label>
          <select
            id="sort"
            name="sort"
            className="sort-options"
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="cabinet-products">
        {filteredAndSortedItems.map((cabinet) => (
          <CabinetProductCard key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>
      <Banner />
    </section>
  );
}

export default Shop;
