import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-blue text-white py-32 sm:py-48">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('./images/footer-bg.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center h-full space-y-12">
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
          <p className="text-center text-lg">All rights reserved © {new Date().getFullYear()} Ofir Patish</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
