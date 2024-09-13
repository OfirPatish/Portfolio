import React from "react";
import { motion } from "framer-motion";
import { FaPlus, FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import cardAnimation from "../assets/Card.json";
import socialImage from "../assets/Social.png";

// Interface for project data
interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image?: string;
}

// Array of project data
const projects: Project[] = [
  {
    id: 1,
    title: "Social Media App",
    description: "A social media application that allows users to connect, share, and interact with each other.",
    url: "https://social.ofirpatish.com/",
    image: socialImage,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Demo project 2",
    url: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Demo project 3",
    url: "https://example.com/project3",
  },
];

// Portfolio component: Displays a grid of project cards with hover effects
const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center">
          <FaCaretRight className="w-8 h-8 mr-2 text-blue-500" />
          <span className="text-black text-xl font-extrabold uppercase tracking-wider mx-2">Portfolio</span>
          <FaCaretLeft className="w-8 h-8 ml-2 text-blue-500" />
        </h2>
        {/* Section description */}
        <p className="text-center text-gray-600 mb-12">
          In the future, this section will showcase my completed projects with live demos and detailed descriptions. For
          now, enjoy these placeholder project cards!
        </p>
        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full max-w-[420px] h-[420px] bg-gray-200 rounded-lg shadow-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-3/5 h-3/5 flex items-center justify-center">
                    <Lottie animationData={cardAnimation} loop={true} />
                  </div>
                </div>
              )}
              {/* Hover overlay with project details */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-xl font-bold mt-4">{project.title}</h3>
                {/* Centered plus icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaPlus size={40} />
                  </a>
                </div>
                <p className="text-white text-center px-4 mb-4">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
