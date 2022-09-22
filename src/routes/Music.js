import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import MusicCard from "../components/Music";

const Music = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Music" text="Available on all major platforms" />
      <MusicCard />
      <Footer />
    </div>
  );
};

export default Music;
