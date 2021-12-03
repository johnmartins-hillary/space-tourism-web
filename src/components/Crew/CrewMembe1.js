import React from "react";
import "../../styles/Crew/CrewMember.css"
import Commander from "../../assets/crew/image-douglas-hurley.webp";

function CrewMember({name, role, bio}) {
  return (
    <div className="crewMember">
      <div className="left">
        <div className="contentContainer">
          <span>02</span> meet your crew
        </div>
        <div className="crewDescContainer">
          <h4 className="role">{role}</h4>
          <h2 className="name">{name}</h2>
          <p className="desc">
          {bio}
          </p>
          <div className="SlideDotsContainer">
          <div className="slideshowDots"></div>
          <div className="slideshowDots"></div>
          <div className="slideshowDots"></div>
          <div className="slideshowDots"></div>
          </div>
        </div>
      </div>

      <div className="right">
          <img src={Commander} alt="douglas-hurley" className="crewImage"/>
      </div>
    </div>
  );
}

export default CrewMember;
