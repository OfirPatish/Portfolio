import React from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import Lottie from "lottie-react";
import cardAnimation from "../assets/Card.json";

// Interface for project data
interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

// Array of project data
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Demo project 1",
    url: "https://example.com/project1",
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
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-blue-600 text-xl font-extrabold uppercase tracking-wider">Portfolio</span>
        </h2>
        {/* Section description */}
        <p className="text-center text-gray-600 mb-12">
          In the future, this section will showcase my completed projects with live demos and detailed descriptions. For
          now, enjoy these placeholder project cards!
        </p>
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="w-[420px] h-[420px] bg-gray-100 rounded-lg shadow-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Lottie animation container */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-3/5 h-3/5 flex items-center justify-center">
                  <Lottie animationData={cardAnimation} loop={true} />
                </div>
              </div>
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
