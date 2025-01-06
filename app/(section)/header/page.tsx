"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(window.scrollY > 0);
    setLastScrollY(window.scrollY);
  };

  const handleAnchorClick = (anchor: string) => {
    if (pathname === "/") {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${anchor}`);
    }
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
        <p
          className="text-xl sm:text-2xl md:text-3xl text-gray-800 hover:cursor-pointer"
          onClick={() => handleAnchorClick("home")}
        >
          CHRISTIAN LENG
        </p>
        <div className="flex gap-4 sm:gap-6 md:gap-10">
          <p
            className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-black-light transition duration-200 cursor-pointer"
            onClick={() => handleAnchorClick("home")}
          >
            Home
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-500 hover:text-black-light transition duration-200 cursor-pointer"
            onClick={() => handleAnchorClick("about")}
          >
            About
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-black-light transition duration-200 cursor-pointer"
            onClick={() => handleAnchorClick("experience")}
          >
            Experience
          </p>
          {/* <p
            className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black-light transition duration-200 cursor-pointer"
            onClick={() => handleAnchorClick("project")}
          >
            Projet
          </p> */}
          <p
            className="text-sm sm:text-base md:text-lg text-gray-800 hover:text-black-light transition duration-200 cursor-pointer"
            onClick={() => handleAnchorClick("contact")}
          >
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
