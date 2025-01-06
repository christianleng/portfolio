"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(window.scrollY > 0);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky z-50 h-20 px-4 flex items-center transition-all duration-300 top-0 bg-primary ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-nav" : ""}`}
    >
      <div className="flex justify-between relative z-50 container mx-auto items-center gap-2 px-4 p-2">
        <a className="text-xl sm:text-2xl md:text-3xl text-gray-800" href="#">
          CHRISTIAN LENG
        </a>
        <div className="flex gap-4 sm:gap-6 md:gap-10">
          <a
            href="#"
            className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-black-light transition duration-200 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm sm:text-base md:text-lg text-gray-500 hover:text-black-light transition duration-200 cursor-pointer"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-black-light transition duration-200 cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black-light transition duration-200 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm sm:text-base md:text-lg text-gray-800 hover:text-black-light transition duration-200 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
