import React from "react";
import HeroBottom from "../components/HeroBottom";
import Homehero from "../components/Homehero";
import RandomPost from "../components/RandomPost";

const Home = () => {



  return (
    <>
      <main>
        <Homehero/>
        <HeroBottom/>
        <RandomPost/>
      </main>
    </>
  );
};

export default Home;
