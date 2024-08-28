import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [text, setText] = useState("Web Developer");
  const roles = ["Web Developer", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setText(roles[Math.floor(Math.random() * roles.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-2">Hello, I'm</h2>
          <h1 className="text-5xl font-bold mb-4">Ofir Patish</h1>
          <p className="text-2xl">
            A <span className="font-bold text-blue-600">{text}</span>
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            src="/path-to-your-image.jpg"
            alt="Ofir Patish"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Here you can add a brief description about yourself, your skills, and your experience.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Feel free to reach out to me at{" "}
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
