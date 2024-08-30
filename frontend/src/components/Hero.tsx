import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";

const Hero: React.FC = () => {
  const roles = ["Full-Stack Developer", "React Enthusiast", "JavaScript Developer"];

  const floatingIcons = [
    { Icon: FaReact, top: "10%", left: "-10%", size: "3rem", duration: 5 },
    { Icon: FaNodeJs, top: "20%", right: "-15%", size: "2.5rem", duration: 6 },
    { Icon: SiJavascript, bottom: "15%", left: "-5%", size: "2.8rem", duration: 7 },
    { Icon: SiTypescript, bottom: "25%", right: "-10%", size: "2.2rem", duration: 5.5 },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen font-poppins">
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
          <p className="text-2xl text-shadow">
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
              className="bg-blue-500 text-white px-6 py-3 rounded-md mr-2 hover:bg-blue-600 transition-colors duration-300 font-bold text-lg"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-blue-500 px-6 py-3 rounded-md font-bold text-lg hover:text-white transition-colors duration-300"
            >
              View My Portfolio
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:pl-16 relative"
        >
          <div className="w-96 h-[32rem] rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative">
            <img
              src="/images/profile.jpg"
              alt="Ofir Patish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {floatingIcons.map(({ Icon, top, left, right, bottom, size, duration }, index) => (
            <motion.div
              key={index}
              className="absolute text-blue-400 hidden md:block" // Add 'hidden md:block' here
              style={{ top, left, right, bottom }}
              animate={{
                y: ["0%", "20%", "0%"],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon style={{ fontSize: size }} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown className="text-white text-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
