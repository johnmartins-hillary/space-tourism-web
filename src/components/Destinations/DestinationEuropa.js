import React from "react";
import Europa from "../../assets/destination/image-europa.webp";
import "../../styles/Destinations/DestinationMoon.css";
import DestinationLinks from "./DestinationLinks";

function DestinationEuropa({ name, desc, travel, distance }) {
  return (
    <div className="destination-moon" id="europa">
      <div className="title">
        <span>01</span> pick your destination
      </div>
      <div className="content">
        <div className="planet">
          <img src={Europa} alt={name} height="400px" width="400px" />
        </div>
        <div className="desc">
          <DestinationLinks />
          <h1 className="desc-title">{name}</h1>
          <div className="main-desc">{desc}</div>
          <div className="travel-details">
            <div className="dist">
              <h5>avg. distance</h5>
              <p>{distance}</p>
            </div>
            <div className="time">
              <h5>est. travel time</h5>
              <p>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationEuropa;
