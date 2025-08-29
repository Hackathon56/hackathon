import React from "react";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import "./home.css"; // Import the CSS file for styling

export function Home() {
  return (
    <>
      <div className="container-hero">
        <h1 className="hero-heading">AI Meeting Minutes Generator</h1>
        <p className="hero-subheading" style={{ color: "white" }}>
          Capture every detail. Summarize in seconds. Share with ease.
        </p>
        <button type="button" className="btn-hero">
          Start Now
        </button>
        <div className="image-gallery">
          <img src={imag1} alt="first" className="image-item" />
          <img
            src={imag2}
            alt="center"
            className="image-item center-image"
            style={{ marginRight: "10px" }}
          />
          <img src={imag1} alt="last" className="image-item" />
        </div>
      </div>
    </>
  );
}
