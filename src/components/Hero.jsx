import React from "react";
import Navbar from "./Navbar";

const Hero = ({ children }) => {
  return (
    <section className="h-[90vh] bg-[url(https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg)] bg-center bg-cover">
      <section className="bg-black/70 text-white h-full">
        <Navbar />
        {children}
      </section>
    </section>
  );
};

export default Hero;
