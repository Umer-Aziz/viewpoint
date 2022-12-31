import React from "react";
import HeroBottom from "../components/home/HeroBottom";
import Homehero from "../components/home/Homehero";
import PicksPosts from "../components/home/PicksPosts";
import RandomPost from "../components/home/RandomPost";
import { Helmet } from "react-helmet";
const Home = () => {



  return (
    <>
    <Helmet>
            <title>pointview - Home </title>
            <link rel="canonical" href="https://pointview.tech" />
        </Helmet>
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
