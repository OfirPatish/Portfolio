import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaGraduationCap, FaEnvelope, FaBriefcase, FaCode } from "react-icons/fa";

// About component: Displays information about the developer in a tabbed interface
const About: React.FC = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("story");

  // Define tabs for the interface
  const tabs = [
    { id: "story", label: "My Story", icon: FaCode },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "contact", label: "Contact", icon: FaEnvelope },
    { id: "work", label: "Work", icon: FaBriefcase },
  ];

  // Content for each tab
  const content = {
    story: (
      <p className="text-lg text-gray-700 leading-relaxed font-opensans">
        I'm <span className="text-blue-600 font-bold">Ofir Patish</span>, a passionate{" "}
        <span className="text-blue-600 font-bold">full-stack developer</span> with a lifelong love for{" "}
        <span className="text-blue-600 font-bold">technology</span>. From my early days tinkering with{" "}
        <span className="text-blue-600 font-bold">computers</span> to now crafting intricate{" "}
        <span className="text-blue-600 font-bold">web applications</span>, I've always been driven by the creative
        potential of <span className="text-blue-600 font-bold">code</span>. I believe in the perfect fusion of{" "}
        <span className="text-blue-600 font-bold">functionality</span> and{" "}
        <span className="text-blue-600 font-bold">aesthetics</span>, striving to build digital experiences that are not
        just efficient, but visually captivating.
      </p>
    ),
    education: (
      <div className="space-y-4 font-opensans">
        <h3 className="text-xl font-semibold text-blue-600">Full Stack Development</h3>
        <p className="text-lg text-gray-700">John Bryce - 10 Month Intensive Course</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Gained proficiency in front-end and back-end technologies</li>
          <li>Developed multiple full-stack projects</li>
          <li>Collaborated in agile team environments</li>
        </ul>
      </div>
    ),
    contact: (
      <div className="space-y-4 font-opensans">
        <p className="text-lg text-gray-700">
          <FaEnvelope className="inline mr-2 text-blue-600" />
          Feel free to reach out to me at{" "}
          <a href="mailto:ofirpatishop@gmail.com" className="font-bold text-blue-600 hover:underline">
            ofirpatishop@gmail.com
          </a>{" "}
          for any inquiries or opportunities.
        </p>
      </div>
    ),
    work: (
      <div className="space-y-4 font-opensans">
        <h3 className="text-xl font-semibold text-blue-600">Open for Opportunities</h3>
        <p className="text-lg text-gray-700">
          I'm currently seeking roles where I can apply my full-stack skills, contribute to innovative projects, and
          continue growing as a developer.
        </p>
      </div>
    ),
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Animated Lottie illustration */}
          <motion.div
            className="lg:w-2/5 mb-12 lg:mb-0 lg:-mt-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Lottie animationData={require("../assets/About.json")} className="w-full max-w-md mx-auto" />
            </div>
          </motion.div>
          {/* Content area */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-8">
              {/* Tab navigation */}
              <div className="flex flex-wrap justify-center mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 m-2 rounded-full transition-colors font-poppins ${
                      activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <tab.icon className="mr-2" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
              {/* Animated tab content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {content[activeTab as keyof typeof content]}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
