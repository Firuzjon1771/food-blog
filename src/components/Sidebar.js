// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h4>Latest News</h4>
      <ul className="list-unstyled">
        <li>
          <a href="#">New Restaurant Openings</a>
        </li>
        <li>
          <a href="#">Top 10 Food Trends</a>
        </li>
        <li>
          <a href="#">Special Offers</a>
        </li>
      </ul>
      <hr />
      <h4>Search Restaurants</h4>
      <input type="text" className="form-control" placeholder="Search..." />
      <hr />
      <h4>Reviews</h4>
      <p>Read reviews from other users and share your own!</p>
    </aside>
  );
};

export default Sidebar;
