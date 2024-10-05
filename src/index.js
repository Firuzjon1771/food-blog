// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

// Add bubbles to the background
function createBubbles() {
  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = `${Math.random() * 50 + 30}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
    document.body.appendChild(bubble);
  }
}

createBubbles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
