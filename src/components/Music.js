import React from "react";
import "./MusicStyles.css";
import Iframe from "react-iframe";
import Amazon from "../assets/amazon.svg";
import Apple from "../assets/apple.svg";
import Spotify from "../assets/spotify.svg";
import Youtube from "../assets/youtube.svg";
import { FaArrowDown } from "react-icons/fa";


const Music = () => {
  return (
    <div className="music">
      <div className="playlist">
        <Iframe
          src="https://open.spotify.com/embed/album/2wk0QQLTculUdYSDFMCG7c?utm_source=generator"
          width="100%"
          height="180"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></Iframe>
      </div>


      <div className="card-container" id="service">
      <FaArrowDown className="arrow active"/>
        <h1 className="select">Choose music service</h1>
      <FaArrowDown className="arrow active"/>
      </div>


      <a href="https://open.spotify.com/artist/7FXugc5Lme1dHnjxD88do4" target="_blank"
            rel="noreferrer">
      <div className="card-container">
        
          <img src={Spotify} alt="spotify music link" className="service"/>

          <button className="btn-service">
            Listen
          </button>
      </div></a>

      <a href="https://music.apple.com/us/artist/plastic-rhino/677856153" target="_blank"
            rel="noreferrer">
      <div className="card-container">
        
          <img src={Apple} alt="apple music link" className="service"/>

          <button className="btn-service">
            Listen
          </button>
      </div></a>
      
      <a href="https://www.youtube.com/channel/UCvsetGTdha6kt41qqpmBQQQ" target="_blank"
            rel="noreferrer">
      <div className="card-container">
        
          <img src={Youtube} alt="amazon music link" className="service"/>

          <button className="btn-service">
            Listen
          </button>
      </div></a>

      <a href="https://music.amazon.com/artists/B00E4DJ8WK/plastic-rhino" target="_blank"
            rel="noreferrer">
      <div className="card-container">
        
          <img src={Amazon} alt="amazon music link" className="service"/>

          <button className="btn-service">
            Listen
          </button>
      </div></a>

    </div>
  );
};

export default Music;
