import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-dark-blue text-white py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('./images/footer-bg.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <span className="text-3xl font-semibold cursor-pointer" onClick={scrollToTop}>
            <span className="text-white">op</span>
            <span className="text-blue-400 font-bold">dev</span>
          </span>
          <div className="flex justify-center space-x-12">
            <a
              href="https://www.linkedin.com/in/ofirpatish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-125"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/OfirPatish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-125"
            >
              <FaGithub size={40} />
            </a>
          </div>
          <p className="text-center text-lg">
            All rights reserved © {new Date().getFullYear()} <span className="font-bold">Ofir Patish</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
