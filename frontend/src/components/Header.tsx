import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Lottie from "lottie-react";
import codeAnimation from "../assets/Code.json";

const Header: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === "header") {
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
    <header
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-dark-blue shadow-lg transition-all duration-300 ease-in-out"
          : "absolute top-0 left-0 right-0 bg-transparent"
      } z-50 text-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Lottie animation */}
          <Link to="/" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, "top")}>
            <div className="w-8 h-8">
              <Lottie animationData={codeAnimation} loop={true} />
            </div>
            <span className="text-2xl font-semibold text-white">opdev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#header"
                  aria-label="Navigate to Home section"
                  className="font-bold text-lg hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "header")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  aria-label="Navigate to About section"
                  className="font-bold text-lg hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  aria-label="Navigate to Portfolio section"
                  className="font-bold text-lg hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  aria-label="Navigate to Contact section"
                  className="font-bold text-lg hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark-blue bg-opacity-90">
          <ul className="flex flex-col items-center py-4">
            <li>
              <a
                href="#header"
                aria-label="Navigate to Home section"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "header")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                aria-label="Navigate to About section"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                aria-label="Navigate to Portfolio section"
                className="block py-2 font-bold text-lg uppercase hover:text-accent transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="Navigate to Contact section"
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
