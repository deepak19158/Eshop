import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "XYZ",
  };
  return (
    <>
      <h1>{myName}</h1>
      <HeroSection myData={data}></HeroSection>
    </>
  );
};

export default About;
