import React from "react";
import Footer from "../components/Footer";
import HeroImage3 from "../components/HeroImage3";
import Navbar from "../components/Navbar";
import Gigs from '../components/Gigs'

const Shows = () => {
  return (
    <div>
      <Navbar />
      <HeroImage3 heading="Shows" text="All upcoming shows and events"/>
      <Gigs />
      <Footer />
    </div>
  );
};

export default Shows;
