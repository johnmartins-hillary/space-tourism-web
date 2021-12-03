import React from "react";
import { useState, useRef, useEffect } from "react";
import "../../styles/Crew/CrewSlide.css";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function CrewSlide() {
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idX) => (
          <div className={`slideshowDot${index === idX ? "active" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}

export default CrewSlide;
