import { useState } from "react";
import { motion } from "framer-motion";
import { logo, menu } from "./../assets";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { IoMdMail, IoMdClose } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
  const homePage = "/";
  const aboutPage = "/about";
  const contactPage = "/contact";
  const getInvolvedPage = "/get_involved";
  const teamPage = "/team";
  const eventPage = "/events";
  const galleryPage = "/gallery";

  const [activeNav, setActiveNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeActiveNav = () => {
    if (window.scrollY >= 250) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  document.addEventListener("scroll", changeActiveNav);

  const showMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  // "fixed w-full shadow-sm z-30 bg-white duration-300"

  return (
    <nav className="w-full shadow-sm duration-300">
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
          <Link to={homePage} className="logo">
            <img src={logo} alt="" />
          </Link>

          <ul className="hidden md:flex items-center justify-center gap-5">
            <li>
              <Link to={homePage} className="text-xl font-normal">
                Services
              </Link>
            </li>
            <li>
              <Link to={eventPage} className="text-xl font-normal">
                Events
              </Link>
            </li>
            <li>
              <Link to={galleryPage} className="text-xl font-normal">
                Gallery
              </Link>
            </li>
            <li>
              <Link to={teamPage} className="text-xl font-normal">
                Team
              </Link>
            </li>
            <li>
              <Link to={getInvolvedPage} className="text-xl font-normal">
                Get Involved
              </Link>
            </li>
            <li>
              <Link to={aboutPage} className="text-xl font-normal">
                About
              </Link>
            </li>
            <li>
              <Link to={contactPage} className="text-xl font-normal">
                Contact
              </Link>
            </li>
          </ul>

          <button className="md:hidden" onClick={showMenuToggle}>
            <HiMenuAlt2 size={30} />
          </button>

          <button className="hidden text-xl md:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
            Support Us
          </button>
        </div>
      </div>

      {/* Bottom Side with Active */}
      {activeNav && (
        <div className="fixed top-0 right-0 left-0 w-full py-3 bg-white z-20">
          <div className="container mx-auto flex items-center justify-between">
            <Link to={homePage} className="logo">
              <img src={logo} alt="" />
            </Link>

            <ul className="hidden md:flex items-center justify-center gap-5">
              <li>
                <Link to={homePage} className="text-xl font-normal">
                  Services
                </Link>
              </li>
              <li>
                <Link to={eventPage} className="text-xl font-normal">
                  Events
                </Link>
              </li>
              <li>
                <Link to={galleryPage} className="text-xl font-normal">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to={teamPage} className="text-xl font-normal">
                  Team
                </Link>
              </li>
              <li>
                <Link to={getInvolvedPage} className="text-xl font-normal">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to={aboutPage} className="text-xl font-normal">
                  About
                </Link>
              </li>
              <li>
                <Link to={contactPage} className="text-xl font-normal">
                  Contact
                </Link>
              </li>
            </ul>

            <button className="md:hidden" onClick={showMenuToggle}>
              <HiMenuAlt2 size={30} />
            </button>

            <button className="hidden text-xl md:block border-2 border-pink-400 rounded-md px-5 py-2 hover:text-white hover:bg-pink-400 hover:border-gray-600 transition-all duration-300">
              Support Us
            </button>
          </div>
        </div>
      )}

      {/* Show hidden Menu */}
      {showMenu && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -200 }}
          className="fixed w-full h-[450px] top-0 left-0 visible glassmorphism z-30 md:hidden"
        >
          <div className="flex items-center justify-between px-5 py-[0.7rem]">
            <img src={logo} className=" cursor-pointer" />
            <IoMdClose
              size={30}
              onClick={showMenuToggle}
              className=" cursor-pointer"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center gap-5">
            <div className="w-1/2 h-full relative">
              <img
                src={menu}
                alt="menu"
                className="absolute w-full h-full top-0 left-0 bottom-0 object-cover"
              />
            </div>

            <ul className="w-1/2 h-full">
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200 mt-5">
                <Link to={homePage} className="text-lg font-medium">
                  Services
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={eventPage} className="text-lg font-medium">
                  Events
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={galleryPage} className="text-lg font-medium">
                  Gallery
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={teamPage} className="text-lg font-medium">
                  Team
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={getInvolvedPage} className="text-lg font-medium">
                  Get Involved
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={aboutPage} className="text-lg font-medium">
                  About
                </Link>
              </li>
              <li className="mb-4 text-start mx-1 px-2 hover:text-pink-600 duration-200">
                <Link to={contactPage} className="text-lg font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

      {showMenu && (
        <div
          className="fixed z-20 w-full h-full left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)] backdrop-blur-[1.5px] md:hidden"
          onClick={showMenuToggle}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
