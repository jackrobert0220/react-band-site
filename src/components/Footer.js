import React from "react";
import "./FooterStyles.css";
import { FaInstagram, FaFacebook, FaSpotify, FaYoutube, FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="social">

          <a
            className="icon"
            href="https://www.facebook.com/plasticrhino/"
            target="_blank"
            rel="noreferrer"
          ><FaFacebook
            size={30}
            style={{ color: "#ffffff", margin: "1rem" }}
          /></a>

          <a
          className="icon"
            href="https://www.instagram.com/plasticrhinoband/?hl=en"
            target="_blank"
            rel="noreferrer"
          ><FaInstagram
              size={30}
              style={{ color: "#ffffff", margin: "1rem" }}
            />
          </a>

          <a
          className="icon"
            href="https://www.tiktok.com/@plasticrhinoband?lang=en"
            target="_blank"
            rel="noreferrer"
          ><FaTiktok
              size={30}
              style={{ color: "#ffffff", margin: "1rem" }}
            />
          </a>

          <a
          className="icon"
            href="https://open.spotify.com/artist/7FXugc5Lme1dHnjxD88do4?si=0Bt0Z43JSUeLQ-aiy72OOw"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify
              size={30}
              style={{ color: "#ffffff", margin: "1rem" }}
            />
          </a>

          <a
          className="icon"
            href="https://www.youtube.com/channel/UCvsetGTdha6kt41qqpmBQQQ"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube
              size={30}
              style={{ color: "#ffffff", margin: "1rem" }}
            />
          </a>

          <a 
          className="icon"
          href="mailto:jackrobert0220@gmail.com" target="_blank"
            rel="noreferrer"><HiOutlineMail
            size={30}
            style={{ color: "#ffffff", margin: "1rem" }}
          /></a>
        </div>
      </div>
      <p className="rights">© 2022 PLASTIC RHINO</p>
    </div>
  );
};

export default Footer;
