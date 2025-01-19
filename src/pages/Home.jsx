import FeaturedProduct from "@/customComponents/Featuresproduct";
import CarouselPlugin from "@/customComponents/HeroSection";
import LatestProduct from "@/customComponents/latestproduct";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <CarouselPlugin />
      <div className="">
        <FeaturedProduct />
        <LatestProduct />
      </div>
    </div>
  );
};

export default Home;