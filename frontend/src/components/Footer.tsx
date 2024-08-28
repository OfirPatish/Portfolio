import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Ofir Patish. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">Designed and built with ❤️ using React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
