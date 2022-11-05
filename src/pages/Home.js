import React from "react";
import HeroBottom from "../components/home/HeroBottom";
import Homehero from "../components/home/Homehero";
import PicksPosts from "../components/home/PicksPosts";
import RandomPost from "../components/home/RandomPost";

const Home = () => {



  return (
    <>
      <main>
        <Homehero/>
        <HeroBottom/>
        <RandomPost/>
        <PicksPosts/>
      </main>
    </>
  );
};

export default Home;
