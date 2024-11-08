import React, { useState } from "react";
import "./Search.css";

const Search = ({ searchItem, setSearchItem, order, setOrder }) => {
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };
  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by title or content"
        value={searchItem}
        onChange={handleSearchItem}
      />
      <button>Search</button>

      <div className="sort">
        <select onChange={handleSort} value={order}>
          <option value="default" disabled>
            Sort List Order
          </option>
          <option value="asc">Sort (A-Z)</option>
          <option value="desc">Sort (Newest to Oldest)</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
