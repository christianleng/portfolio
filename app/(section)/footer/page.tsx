import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-4 pb-4 pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-t from-greenShadow2 via-[#ffffff00] to-[#ffffff00]"></div>
      </div>
      <div className="flex container mx-auto px-4 p-2">
        <p>&copy; {new Date().getFullYear()} Christian Leng</p>
      </div>
    </footer>
  );
};

export default Footer;
