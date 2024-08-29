import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";

const Hero: React.FC = () => {
  const roles = ["Full-Stack Developer", "API Architect", "Database Engineer"];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950"></div>
      <Header />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:pr-16"
        >
          <h2 className="text-3xl font-bold mb-2">Hello, I'm</h2>
          <h1 className="text-5xl font-bold mb-4">
            Ofir <span className="text-blue-400">Patish</span>
          </h1>
          <p className="text-2xl">
            A{" "}
            <span className="font-bold text-blue-400">
              <Typewriter
                words={roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="mt-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition-colors duration-300 font-bold"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-blue-500 px-6 py-2 font-bold hover:text-white transition-colors duration-300"
            >
              View My Portfolio
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:pl-16"
        >
          <div className="w-96 h-[32rem] rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-full transform scale-y-125"></div>
            <img
              src="/images/profile.jpg"
              alt="Ofir Patish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
