import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import { useLocation } from "react-router-dom";

// Main Home component
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

  // Define roles for the typing animation
  const roles = ["Web Developer", "UI/UX Designer", "Problem Solver"];

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-white relative overflow-hidden">
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-16 z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:pr-16"
        >
          {/* Introduction text */}
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

          {/* CTA buttons */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-blue-600 transition-colors duration-300">
              Hire Me
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              View My Portfolio
            </button>
          </div>
        </motion.div>

        {/* Right column: Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:pl-16 relative"
        >
          {/* Circular profile picture with white border */}
          <div className="w-96 h-[32rem] rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-full transform scale-y-125"></div>
            <img
              src="/images/profile.jpg"
              alt="Ofir Patish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </section>

      {/* About section */}
      <About />

      {/* Portfolio section */}

      {/* Contact section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Contact</h2>
          <p className="text-xl max-w-3xl mx-auto text-center text-gray-700">
            Feel free to reach out to me at{" "}
            <a href="mailto:your.email@example.com" className="text-primary hover:underline">
              your.email@example.com
            </a>
          </p>
          <div className="mt-8 flex justify-center space-x-4">{/* Social media icons */}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
