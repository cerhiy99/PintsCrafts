import React from "react";
import Advantages from "./Advantages";
import BeerFlavors from "./BeerFlavors";
import CraftedToInspire from "./CraftedToInspire";
import HomeImgs from "./HomeImgs";
import SwiperList from "./SwiperList";


const Home = () => {
  
  return (
    <div className="home__main">
      <SwiperList/>
      <CraftedToInspire/>
      <BeerFlavors/>
      <HomeImgs/>
      <Advantages/>
    </div>
  )
}

export default Home
