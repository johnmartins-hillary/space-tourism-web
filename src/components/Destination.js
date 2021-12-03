import React from "react";
import "../styles/Destination.css";
import {datas} from "../datas"
import DestinationMoon from "./Destinations/DestinationMoon";
import DestinationMars from "./Destinations/DestinationMars";
import DestinationEuropa from "./Destinations/DestinationEuropa";
import DestinationTitan from "./Destinations/DestinationTitan";


function Destination() {
  return <div className="destination">
   <DestinationMoon name={datas.destinations[0].name} desc={datas.destinations[0].description} distance={datas.destinations[0].distance} travel={datas.destinations[0].travel}/>
   <DestinationMars name={datas.destinations[1].name} desc={datas.destinations[1].description} distance={datas.destinations[1].distance} travel={datas.destinations[1].travel}/>
   <DestinationEuropa name={datas.destinations[2].name} desc={datas.destinations[2].description} distance={datas.destinations[2].distance} travel={datas.destinations[2].travel}/>
   <DestinationTitan name={datas.destinations[3].name} desc={datas.destinations[3].description} distance={datas.destinations[3].distance} travel={datas.destinations[3].travel}/>
   <DestinationTitan name={datas.destinations[3].name} desc={datas.destinations[3].description} distance={datas.destinations[3].distance} travel={datas.destinations[3].travel}/>
  </div>;
}

export default Destination;
