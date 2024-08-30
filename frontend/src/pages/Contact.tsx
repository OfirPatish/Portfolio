import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

// Contact component: Renders a contact form for user inquiries
const Contact: React.FC = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://contact-form-handler.ofirpatishop.workers.dev", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Message sent successfully");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorText = await response.text();
        console.error("Failed to send message:", errorText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center">
          <MdEmail className="w-8 h-8 mr-2 text-blue-500" />
          <span className="text-black text-xl font-extrabold uppercase tracking-wider">Get in Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          {/* Animated contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name input field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {/* Email input field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {/* Message textarea */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                required
              ></textarea>
            </div>
            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
