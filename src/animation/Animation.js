import React from "react";
import './animation.css'; // Chemin relatif, car Animation.css est dans le même dossier que Animation.js



export default function Animation() {
  return (
    <div className="slider-container">
        <h1>les nouveautes</h1>
      <div className="slider-images">
        <img src="/bb.jpg" alt="Image 1" className="slider-image" />
        <img src="/conc.jpg" alt="Image 2" className="slider-image" />
        <img src="/bb.jpg" alt="Image 3" className="slider-image" />
        <img src="/bb.jpg" alt="Image 4" className="slider-image" />
      </div>
    </div>
  );
}
