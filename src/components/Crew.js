import React from "react";
import "../styles/Crew.css";
import CrewMember1 from "./Crew/CrewMembe1";
import CrewSlide from "./Crew/CrewSlide";
import Header from "./Header";
import { datas } from "../datas";

function Crew() {
  return (
    <div className="crew">
      <CrewMember1
        name={datas.crew[0].name}
        role={datas.crew[0].role}
        bio={datas.crew[0].bio}
        travel={datas.crew[0].travel}
      />
      <CrewMember1
        name={datas.crew[1].name}
        role={datas.crew[1].role}
        bio={datas.crew[1].bio}
        travel={datas.crew[1].travel}
      />
      <CrewMember1
        name={datas.crew[2].name}
        role={datas.crew[2].role}
        bio={datas.crew[2].bio}
        travel={datas.crew[2].travel}
      />
      <CrewMember1
        name={datas.crew[3].name}
        role={datas.crew[3].role}
        bio={datas.crew[3].bio}
        travel={datas.crew[3].travel}
      />
    </div>
  );
}

export default Crew;
