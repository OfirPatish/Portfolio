import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "./About";
import SkillsCarousel from "../components/SkillsCarousel";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-hidden">
      <Hero />
      <About />
      <SkillsCarousel />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
