import React, { useState, useEffect } from "react";
import "./SliderBoxes.css";

const slides = [
  {
    colorClass: "blue-box",
    text: "BlueBox certificates are verified and checked by us"
  },
  {
    colorClass: "green-box",
    text: "Here you find certificates uploaded by users but currently not authenticated by us"
  },
  {
    colorClass: "red-box",
    text: "Here you find reverted certificates"
  }
];

function SliderBoxes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="left-content">
        <h2>Some text or content here</h2>
        <p>You can describe your certificates or instructions here.</p>
      </div>
      <div className="slider-container">
        <div className={`slide-box ${slides[currentIndex].colorClass}`}>
          <h3>{slides[currentIndex].text}</h3>
        </div>
      </div>
    </div>
  );
}

export default SliderBoxes;
