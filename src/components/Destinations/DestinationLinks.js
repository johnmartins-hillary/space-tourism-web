import React from "react";
import "../../styles/Destinations/DestinationLinks.css";

function DestinationLinks() {
  return (
    <div className="destination-links">
      <a href="#moon" ClassName="active" className="link">
        moon
      </a>
      <a href="#mars" ClassName="active" className="link">
        mars
      </a>
      <a href="#europa" ClassName="active" className="link">
        europa
      </a>
      <a href="#titan" ClassName="active" className="link">
        titan
      </a>
    </div>
  );
}

export default DestinationLinks;
