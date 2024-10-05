// src/components/BlogList.js
import React from "react";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "The Best Pizza Places in Town",
      date: "2023-09-10",
      image: "pizza.jpg",
    },
    {
      id: 2,
      title: "Top 5 Vegan Restaurants",
      date: "2023-09-12",
      image: "vegan.jpg",
    },
    {
      id: 3,
      title: "Hidden Gems for Seafood Lovers",
      date: "2023-09-15",
      image: "seafood.jpg",
    },
    {
      id: 4,
      title: "Hidden Gems for Seafood Lovers",
      date: "2023-09-15",
      image: "seafood.jpg",
    },
    {
      id: 5,
      title: "Hidden Gems for Seafood Lovers",
      date: "2023-09-15",
      image: "seafood.jpg",
    },
    {
      id: 6,
      title: "Hidden Gems for Seafood Lovers",
      date: "2023-09-15",
      image: "seafood.jpg",
    },
  ];

  return (
    <div className="row">
      {blogs.map((blog) => (
        <div className="col-md-4 mb-4" key={blog.id}>
          <div className="card">
            <img src={blog.image} className="card-img-top" alt={blog.title} />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">Posted on {blog.date}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
