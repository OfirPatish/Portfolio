import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        navigate(`/#${sectionId}`);
      }
    }
  };

  return (
    <header className="bg-dark-blue text-white fixed w-full z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-blue-400" onClick={(e) => scrollToSection(e, "top")}>
            Tech<span className="text-white font-bold">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="font-bold text-lg uppercase hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "top")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-bold text-lg uppercase hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="font-bold text-lg uppercase hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-bold text-lg uppercase hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-secondary">
          <ul className="flex flex-col items-center py-4">
            <li>
              <a
                href="#"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "top")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
