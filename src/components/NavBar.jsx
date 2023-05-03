import { useState } from "react";
import { logo } from "./../assets";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPhone,
  FaHamburger,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);

  const changeActiveNav = () => {
    if (window.scrollY > 20) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  document.addEventListener("scroll", changeActiveNav);

  return (
    <nav className={activeNav ? "w-full shadow-sm" : "w-full shadow-sm "}>
      {/* Top Side */}
      <div className="border-b-2 py-4">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:justify-between md:gap-5">
            <h3 className="flex items-center justify-center">
              <IoMdMail size={18} className="mr-2" />
              info@cancersupportnf.org
            </h3>
            <h3 className="flex items-center justify-center">
              <span>
                <FaPhone size={18} className="mr-2" />
              </span>{" "}
              +233 552 689 014
            </h3>
            <h3 className="flex items-center justify-center">
              <span>
                <MdLocationPin size={18} className="mr-2" />
              </span>{" "}
              13 Jungle Avenue - East Legon, Accra
            </h3>
          </div>

          <ul className="flex items-center justify-center gap-5 mt-3 md:mt-0">
            <li>
              <a href="#">
                <FaFacebookSquare size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Side */}
      <div className=" py-3">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>

          <ul className="hidden md:flex items-center justify-center gap-5">
            <li>
              <a href="#" className="text-xl font-normal">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                Get Involved
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-normal">
                Contact
              </a>
            </li>
          </ul>

          <button className="md:hidden">
            <FaHamburger size={30} />
          </button>

          <button className="hidden text-xl md:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
            Support Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
