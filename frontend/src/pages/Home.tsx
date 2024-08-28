import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./About";

// Custom hook for creating a typing animation effect
const useTypingEffect = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 1000) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? text.length > 0 : text.length === currentWord.length;

      // Update text based on whether we're typing or deleting
      setText((prev) => (isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)));

      // Handle state changes and timing for the animation
      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};

// Main Home component
const Home: React.FC = () => {
  // Define roles for the typing animation
  const roles = ["Web Developer", "UI/UX Designer", "Problem Solver"];
  const animatedText = useTypingEffect(roles);

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-white relative overflow-hidden">
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-16 z-10 container mx-auto px-4">
        {/* Left column: Introduction and CTA buttons */}
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
            A <span className="font-bold text-blue-400">{animatedText}</span>
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
          <div className="w-80 h-96 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-full transform scale-y-125"></div>
            <img
              src="/images/ppf.jpg"
              alt="Ofir Patish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </section>

      {/* About section */}
      <About />

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
