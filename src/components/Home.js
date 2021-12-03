import React from "react";
import "../styles/Home.css";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-body">
        <div className="home-content">
          <h2 className="heading-5">So, you want to travel to</h2>
          <h1 className="main-heading">space</h1>
          <p className="main-content">
            lets face it, if you want to go to space you might as well genuinly
            go to outer space and not hover king of the edge of it. well dit
            back and relax because we wqill give you a truely ut of this world
            experience!.
          </p>
        </div>
        <div className="explore-btn-container">
          <Link to="/destination" className="explore-btn"></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
