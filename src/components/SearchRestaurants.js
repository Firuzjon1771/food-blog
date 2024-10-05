// src/components/SearchRestaurants.js
import React, { useState } from "react";

const cuisines = ["Chinese", "French", "Italian", "Mexican", "Indian"];

const SearchRestaurants = () => {
  const [query, setQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleSearch = () => {
    // Implement search logic here
    alert(`Searching for ${query} in ${selectedCuisine}`);
  };

  return (
    <div>
      <h2>Search Restaurants</h2>
      <div className="form-group">
        <label htmlFor="searchQuery">Search</label>
        <input
          type="text"
          id="searchQuery"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for restaurants..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cuisineSelect">Cuisine Type</label>
        <select
          id="cuisineSelect"
          className="form-select"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">Select Cuisine</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchRestaurants;
