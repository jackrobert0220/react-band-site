import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import prVideo from "../assets/PR-Video.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline id="video">
        <source src={prVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Plastic Rhino</h1>
        <p>Los Angeles-based Hard Rock Band</p>

        <Link to="./music" className="btn">
          Listen
        </Link>
        <Link to="./videos" className="btn">
          Watch
        </Link>
        <Link to="./shows" className="btn">
          Shows
        </Link>
      </div>
    </div>
  );
};

export default Video;
