import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="h-[90vh] bg-[url(https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg)] bg-center bg-cover">
      <section className="bg-black/70 text-white h-full">
        <Navbar />
        <div className="h-full w-full text-center mt-24">
          <h1 className="text-5xl font-dancing-script font-semibold">
            Shree Seva Sadan Restaurant
          </h1>
          <p className="mt-2">Pure Veg • Pure Taste • Pure Trust</p>
        </div>
      </section>
    </section>
  );
};

export default Hero;
