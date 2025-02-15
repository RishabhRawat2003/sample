import { useState } from "react";
import logo from "../assets/header.png";
import arrow from "../assets/down.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between h-[88px] items-center px-6 md:px-12 py-4 bg-white rounded-[23px] shadow-lg">
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Kaumodaki.ai Logo"
          className="h-[65.55px] w-[118px]"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 lg:pl-[350px]">
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            AI & Data{" "}
            <span className="inline-block">
              <img src={arrow} alt="down" className="w-[10px] h-[10px]" />
            </span>
          </button>
          {/* Dropdown content can go here */}
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Services{" "}
            <span className="inline-block">
              <img src={arrow} alt="down" className="w-[10px] h-[10px]" />
            </span>
          </button>
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Company{" "}
            <span className="inline-block">
              <img src={arrow} alt="down" className="w-[10px] h-[10px]" />
            </span>
          </button>
        </div>
      </div>

      {/* Contact Us Button */}
      <button className="hidden md:block bg-blue-600 text-white px-10 py-2 rounded-[6px] hover:bg-blue-700 transition">
        Contact Us
      </button>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 bg-white rounded-[23px] z-50   shadow-lg w-[90%] py-2">
          <div className="flex flex-col space-y-3">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              AI & Data
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              Services
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              Company
            </button>
            <div className="w-full flex justify-center">
            <button className="bg-blue-600 w-[250px] text-white px-4 py-2 rounded-[6px] hover:bg-blue-700 transition">
              Contact Us
            </button>
            </div>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;