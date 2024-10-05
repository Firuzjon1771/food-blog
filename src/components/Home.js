// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Gallery Section */}
        <section className="gallery">
          <div className="gallery-item">
            Image 1
            <img
              src={require("../images/iconic_photo_1.jpg")}
              alt="Iconic Food 1"
              style={{ width: "100px" }}
            />
          </div>
          <div className="gallery-item">Image 2</div>
          <div className="gallery-item">Image 3</div>
        </section>

        {/* Description Section */}
        <section className="description">
          <div className="text-content">
            <h2>Welcome to Food Blog</h2>
            <p>
              Discover the best restaurants, explore unique cuisines, and read
              insightful reviews.
            </p>
          </div>
          <div className="image-content">
            <img src={require("../images/iconic_photo_1.jpg")} alt="Welcome" />
          </div>
        </section>

        {/* Presentation Blog */}
        <section className="presentation-blog">
          <div className="blog-item left">
            <img
              src={require("../images/iconic_photo_1.jpg")}
              alt="Iconic Food 1"
            />
            <div className="blog-details">
              <h3>Location 1</h3>
              <p>Rating: ★★★★☆</p>
              <p>Memorable dining experience.</p>
            </div>
          </div>

          <div className="blog-item right">
            <img
              src={require("../images/iconic_photo_2.jpg")}
              alt="Iconic Food 2"
            />
            <div className="blog-details">
              <h3>Location 2</h3>
              <p>Rating: ★★★★★</p>
              <p>Amazing culinary experience.</p>
            </div>
          </div>

          <div className="blog-item left">
            <img
              src={require("../images/iconic_photo_3.jpg")}
              alt="Iconic Food 3"
            />
            <div className="blog-details">
              <h3>Location 3</h3>
              <p>Rating: ★★★★☆</p>
              <p>Fantastic local cuisine.</p>
            </div>
          </div>
          <div className="blog-item right">
            <img
              src={require("../images/iconic_photo_4.jpg")}
              alt="Iconic Food 4"
            />
            <div className="blog-details">
              <h3>Location 4</h3>
              <p>Rating: ★★★★☆</p>
              <p>Fantastic local cuisine.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
